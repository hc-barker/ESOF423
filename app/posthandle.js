const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var jsonParser = bodyParser.json();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27817/test";

app.use(bodyParser.urlEncoded({extended: true}));

app.get("/", function(request, response){
	console.log("gotten");
});

app.post("/adduser", function(request, response){
	response.send("Hello World");
	console.log(request.body);
	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		console.log("Connected");
		var dbo = db.db("test");
		dbo.collection("members").insertOne(request.body, function(err, res) {
			if (err) throw err;
			console.log("1 document inserted");
			db.close();
		});
	});
});

app.post("/login", jsonParser, function(request, response) {
	if(!request.body) return response.sendStatus(400);
	console.log(request.body);
	MongoClient.connect(url, function(err, db){
		if (err) throw err;
		console.log("Connected");
		var dbo = db.db("test");
		dbo.collection("users").findOne(request.body, function(err, result) {
			if (err) throw err;
			console.log(result);
			if(result != null){
				response.sent("Logged in");
			}
			else {
				response.sent("Get outta here!");
			}
			db.close();
		});
	});
});

app.post("/purge", function(request, response) { 
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		console.log("Connected");
		var dbo = db.db("test");
		dbo.collection("members").drop(function(err, deleteOkay) {
			if (err) throw err;
			if (deleteOkay) console.log("Member collection purges");
			db.close();
		});
	});
});

app.listen(3000);
