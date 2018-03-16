
var data = require('../data.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
  	res.render('mainpage', data);
}

// exports.addItem = function(req, res) {  
// 	// // Your code goes here
// 	// var newItem =  {
// 	// 	"name": localStorage.getItem("name"),
// 	// 	"price": localStorage.getItem("price"),
// 	// 	"priority": localStorage.getItem("category")
// 	// };

// 	// console.log(newItem);
	
// 	// data.Items.push(newItem);
// 	res.render('mainpage', data);
// }