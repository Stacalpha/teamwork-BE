const { DATABASE_URL } = require('./constants/constants');
const pg = require("pg");
const express = require('express');
const dbScripts = require('./database/db');

const app = express();
 
app.get('/', async (req, res)=> {
	const pool = new pg.Pool({ connectionString: DATABASE_URL });

	pool.query(dbScripts.reset)
		.then(async (result)=> {
			console.log(result);
			await pool.query(dbScripts.init);
			result = await pool.query('SELECT * FROM "Employees"');
			res.status(201).json(result.rows);
		})
		.catch((err)=> {
			console.log("not able to get connection " + err);
			res.status(400).send(`${err}`);
		})
		.finally(()=> pool.end());
});
 
app.listen(4000, ()=>	console.log('Server is running.. on Port 4000'));