import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const stomatologyHowPerformedSwiper = new Swiper('.how-performed-section__swiper_stomatology', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.about-section__btn-prev',
    nextEl: '.about-section__btn-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
