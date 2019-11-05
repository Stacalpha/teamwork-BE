const { DATABASE_URL } = require('./constants/constants');
const pg = require("pg");

const express = require('express');
const app = express();
 
app.get('/', (req, res)=> {
	const pool = new pg.Pool({ connectionString: DATABASE_URL });
	
	return pool.query('SELECT NOW()', (err, result) => {
		if(err) {
			console.log("not able to get connection "+ err);
			res.status(400).send(err);
		}

		res.status(200).json(result);

		pool.end();
	});

	const client = new pg.Client({ connectionString: DATABASE_URL });
	client.connect();

	client.query('SELECT NOW()', (err, result) => {
		if(err){
				console.log("not able to get connection "+ err);
				res.status(400).send(err);
		}

		res.status(200).json(result);
		client.end()
	})
});
 
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});