import Swiper from './swiper-bundle.min.js'

const swiper = new Swiper(".my-swiper-for-avtodrom", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 3,
  watchSlidesProgress: true,
  lazy: true,
});
const swiper2 = new Swiper(".my-swiper-avtodrom", {
  loop: true,
  lazy: true,
  spaceBetween: 10,
  navigation: {
    prevEl: ".photos__swiper-prev",
    nextEl: ".photos__swiper-next"
  },
  thumbs: {
    swiper: swiper
  }
});

export function initSlider() {
  const swiper3 = new Swiper(".my-swiper-for-classes", {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 2,
    watchSlidesProgress: true,
    lazy: true,
  });
  const swiper4 = new Swiper(".my-swiper-classes", {
    loop: true,
    lazy: true,
    spaceBetween: 10,
    navigation: {
      prevEl: ".photos__swiper-prev",
      nextEl: ".photos__swiper-next"
    },
    thumbs: {
      swiper: swiper3
    }
  });
}