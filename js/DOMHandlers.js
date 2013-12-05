$( document ).ready(function() {
    console.log( "ready!" );
    
    mobileCheck();
    $("#home").show();
	$("#twitter").hide();
	$("#instagram").hide();
	$("#cost-of-living").hide();
	$("#recent").hide();
	$("#triangle-down").hide();
    $("#user").hide();
    $("#log-out").hide();    
    $("#close").hide();
    $("#about-section").hide();   

	homeActive();

    $( window ).resize(function() {
	  	var leftWidth= $('html').width()-350;
	    console.log(leftWidth);
	    $("#left-container").css("width", leftWidth);
	    console.log($('#left-container').width());
	    mobileCheck();
	});
	
	var weatherMonth = document.getElementById('sel-month');
    currMonth = "07";
    weatherMonth.value = currMonth;
    console.log("current month is: " + weatherMonth.value);

    //Only works on second hit for the city
	$("#topForm").submit(function(e){
		e.preventDefault();
		console.log("enter");
		codeAddress();
	});
	$("#m-topForm").submit(function(e){
		e.preventDefault();
		console.log("enter");
		codeAddressM();
	});

});

function mobileCheck () {

	console.log("is it ");
	var screenWidth = $('html').width();
	if (screenWidth>730) {
    	$("#m-search").hide();
    	console.log("desktop");
    	var leftWidth= screenWidth-350;
    	$("#left-container").css("width", leftWidth);
    	$("#search").show();
    	$("#m-search").hide();
    	$("#right").show();
    	$("#city").show();

    	
    }
    else {
    	var searchMargin = (screenWidth-251) / 2;
    	var yellowTab = screenWidth * .2;
   		$("#m-address").css("margin-left", searchMargin);
   		$("#m-address").css("margin-right", searchMargin);
   		$("#addressButton").css("right", searchMargin-2);
    	$("#search").hide();
    	$("#right").hide();
    	$("#m-search").show();
    	$("#left-container").css("width", screenWidth);
    	$("#city").hide();
    	console.log("mobile");
    	
    }
}
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

function about() {
	$("#about").hide();
	$("#close").show();
	$("#about-section").show();
}
/*** not working ***/
function close() {
	console.log("closing");
	$("#about").show();
	$("#close").hide();
	$("#about-section").hide();
}
function monthChange(month) {
	currMonth = month.value;
	getWeather(underScoreCity);
}