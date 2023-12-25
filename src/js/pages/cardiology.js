import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const cardiologyHowPerformedSwiper = new Swiper(
  '.how-performed-section__swiper_cardiology',
  {
    loop: true,
    slidesPerView: 'auto',
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: '.about-section__btn-prev',
      nextEl: '.about-section__btn-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
)
