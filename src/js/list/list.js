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

	var oD2 = document.getElementById("floatdiv");

	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop >= 330){
			oD2.style.position = "fixed";
			oD2.style.top = 0;

		}else{
			oD2.style.position = "absolute";
			oD2.style.top =330 + "px";
		}
	}
