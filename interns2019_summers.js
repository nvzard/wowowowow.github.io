
$(document).ready(function(){
	$("#anubhav").bind("click", function() {
  		showData("anubhav");
  	});

	$("#arnav").bind("click", function() {
  		showData("arnav");
  	});

	$("#atibhi").bind("click", function() {
  		showData("atibhi");
  	});

	$("#hardik").bind("click", function() {
  		showData("hardik");
  	});

	$("#harshit").bind("click", function() {
  		showData("harshit");
  	});

	$("#nitanshu").bind("click", function() {
  		showData("nitanshu");
  	});

	$("#priyanshi").bind("click", function() {
  		showData("priyanshi");
  	});

	$("#pulkit").bind("click", function() {
  		showData("pulkit");
  	});

	$("#somesh").bind("click", function() {
  		showData("somesh");
  	});

	$("#sushil").bind("click", function() {
  		showData("sushil");
  	});
});

function showData(name) {
	console.log('')
	$("#" + name + "Modal").modal('show');
}