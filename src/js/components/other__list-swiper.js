import Swiper from "swiper";

const otherListSwiper = new Swiper(".other__list-swiper", {
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
    for (let i = 0; i < otherListSwiper?.length; i++) {
        otherListSwiper[i]?.enable()
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        for (let i = 0; i < otherListSwiper?.length; i++) {
            otherListSwiper[i]?.enable()
        }
    } else {
        for (let i = 0; i < otherListSwiper?.length; i++) {
            otherListSwiper[i].enabled = false
        }
    }
})
