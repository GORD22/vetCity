import Swiper from "swiper";
import {Navigation} from "swiper/modules"

const surgeryHowPerformedSwiper = new Swiper(".how-performed-section__swiper", {
    enabled: false,

    loop: true,

    slidesPerView: 'auto',
    modules: [Navigation],
    slidesPerView: 'auto',
    navigation: {
        prevEl: ".about-section__btn-prev",
        nextEl: ".about-section__btn-next",
    },
});

if (window.innerWidth > 1016) {
    surgeryHowPerformedSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1016) {
        surgeryHowPerformedSwiper?.enable()
    } else {
        surgeryHowPerformedSwiper.enabled = false
    }
})
