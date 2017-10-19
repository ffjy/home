$(document).ready(function() {
  var st = new Swiper('.st-container', {
    slidesPerView: 'auto',
    paginationClickable: true
  })
  var school = new Swiper('.school-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1
  })
});