$(document).ready(function() {
    var mySwiper = $('.swiper-container').swiper({
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
    }).on('touchstart', function(e) {
        e.preventDefault();
    })

    mySwiper.on('tap', function(swiper, e) {
        $(".swiper-container  .active").removeClass('active')
        $(".swiper-container .swiper-slide").eq(swiper.clickedIndex).addClass('active')
    })
});