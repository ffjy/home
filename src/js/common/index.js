$(document).ready(function() {
    /**
     * 返回history back
     */
    $('#back').on('click', function() {
        window.history.back()
    });

    /**
     * nav切换
     */
    if ($('.swiper-container').length) {
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
    }

    /**
     * fastclick
     */
    FastClick.attach(document.body);

    /**
     * headRoom
     */
    if ($('.headroom').length) {
        var headroom = new Headroom($('.headroom')[0]);
        headroom.init();
    }
    
});
