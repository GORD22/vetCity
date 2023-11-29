import Swiper from "swiper";

const consultSwiper = new Swiper(".services-section__consult-swiper", {
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
    for (let i = 0; i < consultSwiper?.length; i++) {
        consultSwiper[i]?.enable()
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        for (let i = 0; i < consultSwiper?.length; i++) {
            consultSwiper[i]?.enable()
        }
    } else {
        for (let i = 0; i < consultSwiper?.length; i++) {
            consultSwiper[i].enabled = false
        }
    }
})
