$(document).ready(function() {
	var para0 = $('#para0');
	var para1 = $('#para1');
	var para2 = $('#para2');
	var para3 = $('#para3');
	var para4 = $('#para4');

	para1.hide();
	para2.hide();
	para3.hide();
	para4.hide();

	// setInterval(function() {
	// 	$('#h1').animate( { backgroundColor: '#b7a57a' }, 1000).animate( { backgroundColor: '#4b2e83' }, 1000);
	// }, 2000);

	$("#option0").click(function(event) {
		para1.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para0.show();
	})

	$("#option1").click(function(event) {
		para0.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para1.show();
	});

	$("#option2").click(function(event) {
		para0.hide();
		para1.hide();
		para3.hide();
		para4.hide();
		para2.show();
	});

	$("#option3").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para4.hide();
		para3.show();
	});

	$("#option4").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para3.hide();
		para4.show();
	});

});