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

app.listen(3000);
