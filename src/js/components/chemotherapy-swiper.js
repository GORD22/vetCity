import Swiper from "swiper";

const chemotherapySwiper = new Swiper(".chemotherapy__list-swiper", {
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
    for (let i = 0; i < chemotherapySwiper?.length; i++) {
        chemotherapySwiper[i]?.enable()
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        for (let i = 0; i < chemotherapySwiper?.length; i++) {
            chemotherapySwiper[i]?.enable()
        }
    } else {
        for (let i = 0; i < chemotherapySwiper?.length; i++) {
            chemotherapySwiper[i].enabled = false
        }
    }
})
