exports.index_page = function(req, res){
	res.render('../views/pages/index.ejs', {session: req.session});
};

exports.about_page = function(req, res){
	res.render('../views/pages/about.ejs', {session:req.session});
};
