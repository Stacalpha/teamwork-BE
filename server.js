const express = require('express');
const jwt = require('jsonwebtoken');
const createNewUser = require('./controllers/user-controllers/user-controller');

const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
	res.status(200).json({
		success: true,
		message: "You've reached the root route. React app is served here."
	});
});

app.post('/auth/create-user', createNewUser);
 
app.listen(4000, ()=>	console.log('Server is running.. on Port 4000'));