import Swiper from "swiper";
import { Navigation } from "swiper/modules"

const doctorsWrapperSlides = document.querySelector('.doctors-section__doctors-swiper .swiper-wrapper')

const slidesCount = doctorsWrapperSlides.children.length - 1

const doctorsSwiper = new Swiper(".doctors-section__doctors-swiper", {
    modules: [Navigation],

    enabled: false,

    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
        1016: {
            spaceBetween: slidesCount >= 3 ? 22 : 0,
            navigation: {
                nextEl: slidesCount >= 3 ? '.btn-next' : '',
                prevEl: slidesCount >= 3 ? '.btn-prev' : ''
            }
        }
    }
});

if (window.innerWidth < 1016 && slidesCount === 3) {
    doctorsSwiper?.enable()
} else if (slidesCount >= 3) {
    doctorsSwiper?.enable()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1016 && slidesCount == 3) {
        doctorsSwiper?.enable()
    } else if (slidesCount >= 3) {
        doctorsSwiper?.enable()
    } else if (window.innerWidth >= 768 && slidesCount === 3) {
        doctorsSwiper.enabled = false
    }
})

const sortBtns = document.querySelectorAll('.doctors-section__sort-btn')

for (let i = 0; i < sortBtns?.length; i++) {
    sortBtns[i].addEventListener('click', () => {
        for (let j = 0; j < sortBtns?.length; j++) {
            sortBtns[j].classList.remove('doctors-section__sort-btn_active')
        }
        sortBtns[i].classList.add('doctors-section__sort-btn_active')
    })

}
