const express = require('express');
const bodyParser = require('body-parser');

const member = require('./routes/member.route');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017';
const mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/members', member);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
});

app.get('/about', function(req, res){
	res.render('pages/about');
});

app.get('/members/create', function(req, res){
	res.render('pages/create_member');
});

app.listen(3000);
console.log("Server running on port 3000");
