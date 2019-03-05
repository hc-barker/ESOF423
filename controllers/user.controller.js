const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.user_create_page = function(rerq, res){
	res.render('../views/pages/create_user.ejs');
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
			res.render('../views/pages/create_user.ejs');
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
					res.render('../views/pages/index.ejs');
				});
			}
			);
		}
	});
};

exports.list_users = function(req, res) {
	User.find(function(err, result){
		if(err) throw err;
		res.render('../views/pages/list_user.ejs', {users: result});
	});
};
