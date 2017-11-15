;(function($, undefined) {

  $(document).ready(function() {
    const navFirstList = $('.nav-first').find('>li');
    const navSecondList = $('.nav-second').find('>li');
    navFirstList.each(function(index, item) {
      item = $(item);
      if (item.hasClass('active')) return;
      item.hover(function() {
        $(this).find('.nav-second').show();
      }, function() {
        $(this).find('.nav-second').hide();
      })
    });
    navSecondList.each(function(index, item) {
      item = $(item);
      item.hover(function() {
        $(this).find('.nav-third').show();
      }, function() {
        $(this).find('.nav-third').hide();
      })
    });

    const swiper1 = new Swiper('.people-main', {
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });

    const swiper2 = new Swiper('.school-container', {
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      stretch: 10,
      loop: true,
      sliderMove: function(swiper) {
        console.log(swiper)
      }
    })

    $(function () {
      var _index =0;
      var _rotate_index = 0;

      $(".main-div ul li").mouseover(function(){
        _index=$(this).index();

        $(this).stop().animate({ width: 1020 },600)
          .siblings(".main-div ul li").stop().animate({ width: 85 },600);

        if(_rotate_index !== _index) {
          $(".accordion-img").eq(_rotate_index).removeClass("accordion-slide");
          $(".accordion-img").eq(_index).addClass("accordion-slide");
        }

        _rotate_index = _index;
      });

      $(".main-div ul li").mouseout(function () {
        $(".main-div ul li").eq(0).stop().animate({ width: 1020 },600)
          .siblings(".main-div ul li").stop().animate({ width: 85 },600);

        $(".accordion-img").eq(_rotate_index).removeClass("accordion-slide");
        $(".accordion-img").eq(0).addClass("accordion-slide");

        _rotate_index = 0;
        _index =0;

      });
    });

  });

})(jQuery);