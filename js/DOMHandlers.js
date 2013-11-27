$( document ).ready(function() {
    console.log( "ready!" );
    var leftWidth= $('html').width()-350;
    console.log(leftWidth);
    $("#left-container").css("width", leftWidth);
    console.log($('#left-container').width());
    $("#home").hide();
	$("#twitter").show();
	$("#instagram").hide();
	$("#cost-of-living").hide();
    $( window ).resize(function() {
	  	var leftWidth= $('html').width()-350;
	    console.log(leftWidth);
	    $("#left-container").css("width", leftWidth);
	    console.log($('#left-container').width());
	});
	/*$("#address").on('keyup', function(event){
		event.preventDefault();
		console.log("enter");
	    if(event.keyCode == 13){

	        $("#addressButton").click();
	    }
	});*/
$("#topForm").submit(function(e){
	e.preventDefault();
	console.log("enter");
	
	codeAddress();
});

});

function homeActive () {
	console.log("yellow");
	$(".rhombus-yellow").addClass("activeYellow");
	$(".rhombus-blue").removeClass("activeBlue");
	$(".rhombus-red").removeClass("activeRed");
	$(".rhombus-green").removeClass("activeGreen");
	$("#home").show();
	$("#twitter").hide();
	$("#instagram").hide();
	$("#cost-of-living").hide();
}
function twitterActive () {
	console.log("twitter");
	$(".rhombus-yellow").removeClass("activeYellow");
	$(".rhombus-blue").addClass("activeBlue");
	$(".rhombus-red").removeClass("activeRed");
	$(".rhombus-green").removeClass("activeGreen");
	$("#home").hide();
	$("#twitter").show();
	$("#instagram").hide();
	$("#cost-of-living").hide();
}
function instagramActive () {
	console.log("insta");
	$(".rhombus-yellow").removeClass("activeYellow");
	$(".rhombus-blue").removeClass("activeBlue");
	$(".rhombus-red").addClass("activeRed");
	$(".rhombus-green").removeClass("activeGreen");
	$("#home").hide();
	$("#twitter").hide();
	$("#instagram").show();
	$("#cost-of-living").hide();
}
function zillowActive () {
	console.log("green");
	$(".rhombus-yellow").removeClass("activeYellow");
	$(".rhombus-blue").removeClass("activeBlue");
	$(".rhombus-red").removeClass("activeRed");
	$(".rhombus-green").addClass("activeGreen");
	$("#home").hide();
	$("#twitter").hide();
	$("#instagram").hide();
	$("#cost-of-living").show();
}