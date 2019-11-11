const pg = require("pg");
const express = require('express');

const { DATABASE_URL } = require('./constants/constants');
const dbQueries = require('./database/queries');

const app = express();

app.use(express.json());
 
app.get('/', async (req, res)=> {
	const pool = new pg.Pool({ connectionString: DATABASE_URL });

});
 
app.listen(4000, ()=>	console.log('Server is running.. on Port 4000'));