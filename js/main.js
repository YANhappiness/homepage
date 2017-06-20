
$(document).ready(function () {

	/* 定位到当前类 */
	function index(num){
		$('.menu li').eq(num).addClass('active').siblings().removeClass('active');
	}
	$('.menu li').click(function(){
		$('.menu li').removeClass("active");
		$(this).addClass("active");
	})

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        onSlideChangeStart: function(swiper){
      		index(swiper.activeIndex);
      	}
	});

    var aa= document.querySelectorAll('nav .nav a');
	for(var i=0;i<aa.length;i++){
		(function(i){
			aa[i].onclick = function(){
				swiper.slideTo(i, 1000, false);//切换到第一个slide，速度为1秒
			}
		})(i);
	}
})