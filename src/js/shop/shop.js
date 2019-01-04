var $lis = $('.navlist ul li');
$(function() {
	$($lis).mousemove(function(){
		if($(this).find('div').is(':animated')==false){
			$(this).find('div').slideDown('normal');
		}
	});
	$($lis).mouseleave(function(){
		$(this).find('div').slideUp('normal');
	});
});
	$("document").ready(function () {
	$.ajax({
		type: "get",
		async: false,
		url: "http://recom-s.vancl.com/RechargeCz/getRechargeCzInfo",
		cache: false,
		dataType: "jsonp",
		jsonp: "callback",
		success: function (data) {
			$("#czwenan").html("");
			$("#czwenan").html(data.OtherPage);
		},
		error: function (e) {
		}
	});
});
