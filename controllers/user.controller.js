const User = require('../models/user.model');

exports.user_create_page = function(rerq, res){
	res.render('../views/pages/create_user.ejs');
};
