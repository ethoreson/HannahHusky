$(document).ready(function() {
	var para0 = $('#para0');
	var para1 = $('#para1');
	var para2 = $('#para2');
	var para3 = $('#para3');
	var para4 = $('#para4');
	var para5 = $('#para5');
	var para6 = $('#para6');
	var para7 = $('#para7');

	para1.hide();
	para2.hide();
	para3.hide();
	para4.hide();
	para5.hide();
	para6.hide();
	para7.hide();

	$("#option0").click(function(event) {
		para1.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para5.hide();
		para6.hide();
		para7.hide();
		para0.show();
	})

	$("#option1").click(function(event) {
		para0.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para5.hide();
		para6.hide();
		para7.hide();
		para1.show();
	});

	$("#option2").click(function(event) {
		para0.hide();
		para1.hide();
		para3.hide();
		para4.hide();
		para5.hide();
		para6.hide();
		para7.hide();
		para2.show();
	});

	$("#option3").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para4.hide();
		para5.hide();
		para6.hide();
		para7.hide();
		para3.show();
	});

	$("#option4").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para3.hide();
		para5.hide();
		para6.hide();
		para7.hide();
		para4.show();
	});

	$("#option5").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para6.hide();
		para7.hide();
		para5.show();
	});

	$("#option6").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para5.hide();
		para7.hide();
		para6.show();
	});

	$("#option7").click(function(event) {
		para0.hide();
		para1.hide();
		para2.hide();
		para3.hide();
		para4.hide();
		para5.hide();
		para6.hide();
		para7.show();
	});


});