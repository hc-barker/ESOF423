const Member = require('../models/member.model');

exports.test = function(req, res) {
	res.send('Test!');
};

exports.member_create = function(req, res) {
	let member = new Member({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		birthdate: req.body.birthdate,
		activities: req.body.activities
	});

	member.save(function(err) {
		if(err){
			return next(err);
		}
		res.send('Product created successfully')
	})
};
