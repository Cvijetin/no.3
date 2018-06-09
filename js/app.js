$(document).foundation()

$("#gif").hide();

$("#slika").mouseenter(function(){
	$("#gif").show();
	$("#slika").hide();
});

$("#banana2").hide();

$("#banana").dblclick(function(){
	$("#banana").hide();
	$("#banana2").show();
});