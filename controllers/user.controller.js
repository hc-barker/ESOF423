const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.user_create_page = function(req, res){
	res.render('../views/pages/create_user.ejs', {session:req.session});
};

exports.user_create = function(req, res){
	console.log(req.body);
	var userExistsQuery = User.find({ username: req.body.username });
	userExistsQuery.exec(function(err, docs){
		if(err) throw err;
		console.log("docs");
		console.log(docs);
		if(docs.length) {
			console.log("user already exists");
			res.render('../views/pages/create_user.ejs', {session:req.session});
		}
		else
		{
			bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
				if(err) throw err;
				let user = new User(
						{
							username: req.body.username,
							password: hash
						});
				user.save(function(err) {
					if(err) throw err;
					console.log('User created successfully');
					res.render('../views/pages/index.ejs', {session:req.session});
				});
			}
			);
		}
	});
};

exports.list_users = function(req, res) {
	User.find(function(err, result){
		if(err) throw err;
		res.render('../views/pages/list_user.ejs', {session:req.session, users: result});
	});
};

exports.login_user = function(req, res){
	console.log(req.body.username);
	User.find({username: req.body.username}, function(err, docs) {
		if(err) throw err;
		if(docs.length > 0){
			bcrypt.compare(req.body.password, docs[0].password, function(err, valid){
				console.log(valid);
				if(err) throw err;
				if(valid == true){
					req.session.username = req.body.username;
					res.render('../views/pages/index.ejs', {session:req.session});
				}
				else{
					console.log("failed to log in");
				}
			});
		}
	});
};

exports.logout_user = function(req, res){
	req.session.reset();
	res.render('../views/pages/index.ejs', {session:req.session});
};

exports.user_update_page = function(req, res){
	var findUserQuery = User.find({_id: req.params.id});
	findUserQuery.exec(function(err, docs){
		if(err) throw err;
		res.render('../views/pages/update_user.ejs', {session:req.session, users: docs, id: req.params.id});
	});
};

exports.user_update = function(req, res){
	User.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, function(err, member) {
		if(err) throw err;
		console.log("user updated");
		res.render('../views/pages/index.ejs', {session:req.session});
	});
};

exports.user_delete = function(req, res) {
	console.log(req.params.id);
	User.findOneAndDelete({_id: req.params.id}, function(err) {
		if (err) throw err;
		console.log("user deleted");
		res.render('../views/pages/index.ejs', {session:req.session});
	});
};
