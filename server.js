const express = require('express');
const bodyParser = require('body-parser');

const member = require('./routes/member.route');
const user = require('./routes/user.route');
const activity = require('./routes/activity.route');
const utils = require('./routes/util.route');
const app = express();

const sessions = require('client-sessions');
app.use(sessions({
	cookieName: 'session',
	secret: 'nbiroayirnadbeoianbe', 
	duration: 1000 * 60 * 5,
	activeDuration: 1000 * 60 * 5
}));

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
app.use('/activities', activity);
app.use('/', utils);

app.set('view engine', 'ejs');

app.listen(3000);
console.log("Server running on port 3000");
