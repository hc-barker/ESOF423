exports.index_page = function(req, res){
	res.render('../views/pages/index.ejs');
};

exports.about_page = function(req, res){
	res.render('../views/pages/about.ejs');
};

exports.test_page = function(req, res){
	res.send('welcome ' + req.seniorSession.username);
};
