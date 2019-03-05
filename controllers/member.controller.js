const Member = require('../models/member.model');

exports.test = function(req, res) {
	Member.find(function(err, kittens){
		if(err) return console.error(err);
		console.log(kittens);
	});
	res.send('Test!');
};

exports.member_create_page = function(req, res) {
	res.render('../views/pages/create_member.ejs');
};

exports.member_create = function(req, res) {
	console.log(req.body);
	let member = new Member({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		birthdate: req.body.birthdate,
		activities: req.body.activities
	});
	console.log(member);

	member.save(function(err) {
		if(err){
			return next(err);
		}
		console.log('Member created successfully');
		res.render('../views/pages/index.ejs');
	})
};

exports.list_members = function(req, res) {
	Member.find(function(err, result){
		if(err) return console.error(err);
		res.render('../views/pages/list_member.ejs', {members: result});
	});
};

exports.member_update_page = function(req, res){
	var findMemberQuery = Member.find({_id: req.params.id});
	findMemberQuery.exec(function(err, docs){
		if(err) throw err;
		res.render('../views/pages/update_member.ejs', {members: docs, id:req.params.id});
	});
};

exports.member_update = function(req, res){
	Member.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, function(err, member) {
		if(err) throw err;
		console.log("member updated");
		res.render('../views/pages/index.ejs');
	});
};

exports.member_delete = function(req, res){
	console.log(req.params.id);
	Member.findOneAndDelete({_id:req.params.id}, function(err) {	
		if(err) throw err;
		console.log("Member deleted");
		res.render('../views/pages/index.ejs');
	});
};
