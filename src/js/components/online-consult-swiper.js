import Swiper from "swiper";

const onlineConsultSwiper = new Swiper(".services-section__online-consult-swiper", {
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
    for (let i = 0; i < onlineConsultSwiper?.length; i++) {
        onlineConsultSwiper[i]?.enable()
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        for (let i = 0; i < onlineConsultSwiper?.length; i++) {
            onlineConsultSwiper[i]?.enable()
        }
    } else {
        for (let i = 0; i < onlineConsultSwiper?.length; i++) {
            onlineConsultSwiper[i].enabled = false
        }
    }
})
