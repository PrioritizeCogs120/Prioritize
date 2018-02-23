var data = require("../data.json");

exports.view = function(req,res) {
	res.render('add');
}

exports.addItem = function(req, res) {  
	// Your code goes here
	var newItem =  {
		"name": req.query.name,
		"price": req.query.price,
		"priority": req.query.radio
	};

	console.log(newItem);
	
	data.Items.push(newItem);
	res.render('mainpage', data);
}

