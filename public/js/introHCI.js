'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#dateToday").click(function(e) {
		$('.jumbotron h1').text("Estimated Budget");
		$("#dateToday").text("CLICK ME");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".addbtn").click(recordEvent);
}

function projectClick(e) {
	/*console.log("Project clicked");*/
	e.preventDefault();
	$(this).css("background-color", "#ff0000");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	//$(this).fadeToggle("slow", "linear");
    	$(".project-description").fadeToggle("slow", "linear");
    	//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}

function goBack() {
    window.history.back();
}

function recordEvent(event) {
	event.preventDefault();
	console.log('clicked');
	ga('create','UA-114588990-2','auto');
	ga("send", "event", "add", "click");
}


/*function getDate() {
	var d = new Date();
	var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	document.write(weekday[d.getDay()] + ", ");
	document.write(monthname[d.getMonth()] + ". ");
	document.write(d.getDate() + ", ");
	document.write(d.getFullYear());
	return d;
}*/

