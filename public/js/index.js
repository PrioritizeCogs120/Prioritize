
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#submit').click(setBudget);
	
}

function setBudget() {
    var x = $('#myBudget').value;
    var y = "Your budget for today is $" + x + ".00.";
    document.getElementById("demo").innerHTML = y;
}