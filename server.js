const express = require('express');
const bodyParser = require('body-parser');

const member = require('./routes/member.route');
const user = require('./routes/user.route');
const app = express();

const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
let dev_db_url = 'mongodb://localhost:27017/test';
const mongoDB = dev_db_url;
mongoose.connect(mongoDB, {useCreateIndex: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/members', member);
app.use('/users', user);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index');
});

app.get('/about', function(req, res){
	res.render('pages/about');
});

app.listen(3000);
console.log("Server running on port 3000");
