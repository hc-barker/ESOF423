const Activity = require('../models/activity.model');

exports.activity_create_page = function(req, res) {
	res.render('../views/pages/create_activity.ejs');
};

exports.activity_create = function(req, res) {
	console.log(req.body);
	var activityExistsQuery = Activity.find({name: req.body.name});
	activityExistsQuery.exec(function(err, docs) {
		if(err) throw err;
		console.log(docs);
		if(docs.length) {
			console.log("activity already exists");
			res.render('../views/pages/create_activity.ejs');
		}
		else
		{
			let activity = new Activity(
					{
						name: req.body.name,
						members: []
					});
			activity.save(function(err) {
				if(err) throw err;
				console.log("Acitvity created successfully");
				res.render('../views/pages/index.ejs');
			});
		}
	});
};

exports.activity_list = function(req, res) {
	Activity.find(function(err, result) {
		if(err) throw err;
		res.render('../views/pages/list_activity.ejs', {activities: result});
	});
};
