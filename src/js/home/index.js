$(document).ready(function() {
  var st = $('.st-container').swiper({
    slidesPerView: 'auto',
    paginationClickable: true,
    freeMode: true
  })
  var school = new Swiper('.school-container', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true
  })
});