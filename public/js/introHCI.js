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
	$("a.thumbnail").click(projectClick)
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

$(document).ready(function(){
			var $pc = $('#progressController');
			var $pCaption = $('.progress-bar p');
			var iProgress = document.getElementById('inactiveProgress');
			var aProgress = document.getElementById('activeProgress');
			var iProgressCTX = iProgress.getContext('2d');

			
			drawInactive(iProgressCTX);
			
			$pc.on('change', function(){
				var percentage = $(this).val() / 100;
				drawProgress(aProgress, percentage, $pCaption);
			});

			function drawInactive(iProgressCTX){
				iProgressCTX.lineCap = 'square';

				//outer ring
				iProgressCTX.beginPath();
				iProgressCTX.lineWidth = 15;
				iProgressCTX.strokeStyle = '#e1e1e1';
				iProgressCTX.arc(137.5,137.5,129,0,2*Math.PI);
				iProgressCTX.stroke();

				//progress bar
				iProgressCTX.beginPath();
				iProgressCTX.lineWidth = 0;
				iProgressCTX.fillStyle = '#e6e6e6';
				iProgressCTX.arc(137.5,137.5,121,0,2*Math.PI);
				iProgressCTX.fill();

				//progressbar caption
				iProgressCTX.beginPath();
				iProgressCTX.lineWidth = 0;
				iProgressCTX.fillStyle = '#fff';
				iProgressCTX.arc(137.5,137.5,100,0,2*Math.PI);
				iProgressCTX.fill();

			}
			function drawProgress(bar, percentage, $pCaption){
				var barCTX = bar.getContext("2d");
				var quarterTurn = Math.PI / 2;
				var endingAngle = ((2*percentage) * Math.PI) - quarterTurn;
				var startingAngle = 0 - quarterTurn;

				bar.width = bar.width;
				barCTX.lineCap = 'square';

				barCTX.beginPath();
				barCTX.lineWidth = 20;
				barCTX.strokeStyle = '#00B4FF';
				barCTX.arc(137.5,137.5,111,startingAngle, endingAngle);
				barCTX.stroke();

				$pCaption.text( (parseInt(percentage * 100, 10)) + '%');
			}

				var percentage = $pc.val() / 100;
				drawProgress(aProgress, percentage, $pCaption);

			
		});
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

