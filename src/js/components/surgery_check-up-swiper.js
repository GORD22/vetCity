import Swiper from "swiper";

const surgeryCheckUpSwiper = new Swiper(".surgery_check-up-section__swiper", {
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
    surgeryCheckUpSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        surgeryCheckUpSwiper?.enable()
    } else {
        surgeryCheckUpSwiper.enabled = false
    }
})
