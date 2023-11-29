import Swiper from "swiper";
import { Navigation } from "swiper/modules"

const reviewSwiper = new Swiper(".pet-goes-section__review-swiper", {
    modules: [Navigation],

    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
        1016: {
            spaceBetween: 22,
            navigation: {
                nextEl: '.block-thumb-btns__btn-next',
                prevEl: '.block-thumb-btns__btn-prev'
            }
        }
    }
});
