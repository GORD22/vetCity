import Swiper from "swiper";

const methodsSwiper = new Swiper(".methods-swiper", {
  enabled: false,

  slidesPerView: 'auto',
  spaceBetween: 10,


  breakpoints: {
    1016: {
      spaceBetween: 0,
    }
  }
});

if (window.innerWidth < 1016) {
  methodsSwiper?.enable()
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1016) {
    methodsSwiper?.enable()
  } else {
    methodsSwiper.enabled = false
  }
})
