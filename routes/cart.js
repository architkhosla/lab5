var data = require("../data1.json");

exports.view = function(req, res) { 
	// Your code goes here
		
	res.render('cart',data);
}