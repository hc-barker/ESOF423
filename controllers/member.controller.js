const Member = require('../models/member.model');
const Activity = require('../models/activity.model');
const Report = require('../models/report.model');

exports.test = function(req, res) {
	Member.find(function(err, kittens){
		if(err) return console.error(err);
		console.log(kittens);
	});
	res.send('Test!');
};

exports.member_create_page = function(req, res) {
	Activity.find(function(err, result){
		if(err) throw err;
		res.render('../views/pages/create_member.ejs', {session:req.session, activities: result});
	});
};

exports.document_page = function(req, res) {
	res.render('../views/pages/documents.ejs', {session:req.session});
};

exports.member_create = function(req, res) {
	console.log(req.body);
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	let member = new Member({
		firstname: req.body.firstname,
		middlename: req.body.middlename,
		lastname: req.body.lastname,
		birthdate: req.body.birthdate,
		startdate: date,
		clientID: req.body.clientID,
		phone: req.body.phone,
		mailingaddr: req.body.mailingaddr,
		mailingcity: req.body.mailingcity,
		mailingstate: req.body.mailingstate,
		mailingzip: req.body.mailingzip,
		physaddr: req.body.phsyaddr,
		physcity: req.body.physcity,
		physstate: req.body.physstate,
		physzip: req.body.physzip,
		race: req.body.race,
		ethnicity: req.body.ethnicity,
		gender: req.body.gender,
		numinhousesold: req.body.numinhousehold,
		caregiver: req.body.caregiver,
		income: req.body.income,
		disabled: req.body.disabled,
		veteran: req.body.veteran,
		spouseover60: req.body.spouseover60,
		otherover60: req.body.otherover60,
		activities: req.body.activities
	});
	console.log(member);

	member.save(function(err) {
		if(err){
			throw err;
		}
		console.log('Member created successfully');
		res.render('../views/pages/index.ejs', {session:req.session});
	})
};

exports.list_members = function(req, res) {
	Member.find(function(err, result){
		if(err) throw err
		Activity.find(function(err, act){

			if(err) return console.error(err);
			console.log(result);
			res.render('../views/pages/list_member.ejs', {session:req.session, members: result, activities: act});
		});
	});
};

exports.member_update_page = function(req, res){
	var findMemberQuery = Member.find({_id: req.params.id});
	findMemberQuery.exec(function(err, docs){
		if(err) throw err;
		Activity.find(function(err, result){
			if(err) throw err;
			res.render('../views/pages/update_member.ejs', {session:req.session, members: docs, activities: result, id:req.params.id});
		});
	});
};

exports.member_update = function(req, res){
	Member.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, function(err, member) {
		if(err) throw err;
		console.log("member updated");
		res.render('../views/pages/index.ejs', {session:req.session});
	});
};

exports.member_delete = function(req, res){
	console.log(req.params.id);
	Member.findOneAndDelete({_id:req.params.id}, function(err) {	
		if(err) throw err;
		console.log("Member deleted");
		res.render('../views/pages/index.ejs', {session:req.session});
	});
};

exports.member_report_page = function(req, res){
	Report.find(function(err, result){
		if(err) throw err;

		res.render('../views/pages/member_report.ejs', {session:req.session, members: [], reports: result})
	});
};

exports.member_report = function(req, res){
	Report.find(function(err, result){
		Activity.find(function(err, activities){
			if(err) throw err;
			switch(req.params.name){
				case "All Members":
					console.log("DOOT");
			  	Member.find(function(err, members){
			  		if(err) throw err;
		 				res.render('../views/pages/member_report.ejs', {session: req.session, members: members, reports: result, activities: activities});
					});
				case "Members With No Activities":
					var findMemberQuery = Member.find({activities: []});
					findMemberQuery.exec(function(err, members){
						if(err) throw err;
						res.render('../views/pages/member_report.ejs', {session: req.session, members: members, reports: result, activities: activities});
					});	
			}
			//res.render('../views/pages/member_report.ejs', {session: req.session, members: [], reports: result});
		});
	});
};
