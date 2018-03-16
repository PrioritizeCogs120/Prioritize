'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

 
function initializePage() {
if (typeof(Storage) !== "undefined") {   
// Retrieve
    document.getElementById("budget").innerHTML = "$" + localStorage.getItem("budget");
   //  if(localStorage.getItem("name") !== 'undefined'){
   //  	if(localStorage.getItem("name") !== null) {
   //       console.log("here");
   //  	document.getElementById("newName").innerHTML = localStorage.getItem("name");
   //   document.getElementById("newPrice").innerHTML = localStorage.getItem("price");
   //  document.getElementById("newCategory").innerHTML = localStorage.getItem("category");
   //  }
   // }
 
    	    
} else {
    document.getElementById("budget").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}
