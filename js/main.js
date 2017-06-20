
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    var mySwiper = new Swiper('.swiper-container',{
		onSlideChangeStart: function(swiper){
      		alert(swiper.activeIndex);
    	}
    })
})