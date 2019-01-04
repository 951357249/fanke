var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
				speed:3000,
				effect : 'fade',
				fade: {
				  crossFade: true,
				},
				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable :true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
	　　　autoplayDisableOnInteraction : false,
				})
				
	var comtainer = document.getElementById('swiper_container');
      comtainer.onmouseenter = function () {
        mySwiper.stopAutoplay();
      };
      comtainer.onmouseleave = function () {
        mySwiper.startAutoplay();
      }
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