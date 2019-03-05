const express = require('express');
const bodyParser = require('body-parser');

const member = require('./routes/member.route');
const app = express();

app.use('/members', member);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
});

app.get('/about', function(req, res){
	res.render('pages/about');
});

app.listen(3000);
console.log("Server running on port 3000");
