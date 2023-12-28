import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const reviewSwiper = new Swiper('.pet-goes-section__review-swiper', {
	modules: [Navigation, Pagination],
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 12,
	navigation: {
		nextEl: '.block-thumb-btns__btn-next .review-slide__btn',
		prevEl: '.block-thumb-btns__btn-prev .review-slide__btn',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1016: {
			spaceBetween: 22,
		},
	},
})
