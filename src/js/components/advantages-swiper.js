import Swiper from "swiper";
import { Pagination } from "swiper/modules"

const advantagesSwiper = new Swiper(".about-section__advantages-swiper", {
    modules: [Pagination],

    enabled: false,

    slidesPerView: 'auto',
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        1016: {
            spaceBetween: 0,
        }
    }
});


if (window.innerWidth < 1016) {
    advantagesSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        advantagesSwiper?.enable()
    } else {
        advantagesSwiper.enabled = false
    }
})
