import Swiper from './swiper-bundle.min.js'

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 3,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    prevEl: ".photos__swiper-prev",
    nextEl: ".photos__swiper-next"
  },
  thumbs: {
    swiper: swiper
  }
});