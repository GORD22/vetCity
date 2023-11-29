import Swiper from "swiper";

const cryodestructionSwiper = new Swiper(".cryodestruction__list-swiper", {
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
    cryodestructionSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016) {
        cryodestructionSwiper?.enable()
    } else {
        cryodestructionSwiper.enabled = false
    }
})
