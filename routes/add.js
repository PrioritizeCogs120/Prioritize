var data = require("../data.json");

exports.view = function(req,res) {
	res.render('add');
}

exports.addExpense = function(req, res) {   
	console.log("add expense");
	var name = req.body.name;
	var price = "$" + req.body.price;
	var category = req.body.category;
    var newExpense = {"name" : name,"price" : price,"category": category};
    data.Items.push(newExpense);
	res.json(data);
}

exports.newView = function(req, res) {  
    console.log("render mainpage");  
	res.render('mainpage', data);	
}



