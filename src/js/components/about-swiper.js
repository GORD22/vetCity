import Swiper from "swiper";
import {Navigation} from "swiper/modules"

const animalsSwiper = new Swiper(".about-section__swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        prevEl: ".about-section__btn-prev",
        nextEl: ".about-section__btn-next",
    },
  });