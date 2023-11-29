import Swiper from "swiper";

const diagnosticsSwiper = new Swiper(".diagnostics-section__swiper", {
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
    diagnosticsSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        diagnosticsSwiper?.enable()
    } else {
        diagnosticsSwiper.enabled = false
    }
})
