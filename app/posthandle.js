//External Requirements
const http = require('http');
const express = require("express");
const myParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();

const jsonParser = myParser.json();

const url = "mongodb://localhost:27017/test";

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(myParser.urlencoded({extended: true}));

//get handler for testing
app.get("/", function(request, response){
	console.log("gotten");
});

//post handler for adding members
app.post("/addmember", function(request, response){
	response.send("Hello World");
	console.log(request.body);
	MongoClient.connect(url, function(err, mongo){
		if(err) throw err;
		console.log("Connected");
		mongo.db("test").collection("members").insertOne(request.body, function(err, res) {
			if(err) throw err;
			console.log("1 document inserted");
			mongo.close();
		});
	});
});

/*
* post handler for adding users
* 
* Only allows a user to be added if there is no other user with the same username.
* Encrypts passwords with bcrypt
*/
const addUserFailure = "Failed to add user"; //Success and failure messages
const addUserSuccess = "Successfully added user";
app.post("/adduser", function(request, response){
	MongoClient.connect(url, function(err, mongo){
        	if (err) throw err;
        	var table = mongo.db("test").collection("users");
		table.findOne({username: request.body.username},function(err, user) {
			if (err) throw err;
			if (user != null) {//check if user with this name already exists
				response.send(addUserFailure);
			} 
			else { //hash password
				bcrypt.hash(request.body.password, saltRounds, function(err, hash) {
					if (err) throw err;
					var newUser = {
						username: request.body.username,
						password: hash
					};
					table.insertOne(newUser, function(err, res) { //insert user into db
                        			if(err) throw err;
                        			console.log("1 document inserted");
						response.send(addUserSuccess);
					});
                		});
			}
		});
	});
});

/*
* post handler for verifying login attempts
*
* If the posted user exists and the hashed password matches allow them to log in.
*/
const loginSuccess = "Logged in successfully"; //success and failure messages
const loginFailure = "Login failed, bad username or password.";
app.post("/login", jsonParser, function(request, response) {
	if(!request.body) return response.sendStatus(400);
	console.log(request.body);
	MongoClient.connect(url, function(err, mongo){
		if (err) throw err;
		console.log("Connected");
		var usernameObject = {username: request.body.username};
		console.log(usernameObject);
		mongo.db("test").collection("users").findOne(usernameObject,function(err, user) {
			if (err) throw err;
			console.log(user);
			if(user != null){
				bcrypt.compare(request.body.password, user.password, function(err, valid) {
					if (err) throw err;
					console.log(valid);
					if(valid == true){
						response.send(loginSuccess);
					}
					else {
						response.send(loginFailure);
					}
				});
			}
			else {
				response.send(loginFailure);
			}
			mongo.close();
		});
	});
});


//post handler for purging member database
app.post("/purge", function(request, response) {
	MongoClient.connect(url, function(err, mongo){
		if (err) throw err;
		console.log("Connected");
		mongo.db("test").collection("members").drop(function(err, delOK) {
			if(err) throw err;
			if(delOK) console.log("Member collection purged");
			mongo.close();
		});
	});
});

app.listen(3000);
