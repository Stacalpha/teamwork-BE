const { DATABASE_URL } = require('./constants/constants');
const pg = require("pg");

const resetTables = require('./reset-tables');
const initTables = require('./init-tables');

const pool = new pg.Pool({ connectionString: DATABASE_URL });

pool.query(resetTables)
	.then(async (result)=> {
		console.log(result);
		await pool.query(initTables);
		result = await pool.query('SELECT * FROM "Employees"');
		res.status(201).json(result.rows);
	})
	.catch((err)=> {
		console.log("Database operation failed: \n" + err);
		res.status(400).send(`${err}`);
	})
	.finally(()=> pool.end());
//