
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

 
function initializePage() {
	/*$('#submit').click(setBudget);
	*/
}
/*
function setBudget() {
    var x = $('#myBudget').value;
    var y = "Your budget for today is $" + x + ".00.";
    document.getElementById("demo").innerHTML = y;
}
*/

function saveBudget() {
	localStorage.setItem("budget", $('#myBudget').val());
    window.location.href = '/mainpage';
}