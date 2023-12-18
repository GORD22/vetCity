import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const reviewSwiperStomatology = new Swiper('.stomatology-reviews-section__swiper',
	{
		modules: [Navigation],
    slidesPerView: 'auto',
    slidesPerGroup: 2,
		spaceBetween: 16,
		navigation: {
			nextEl: '.stomatology-reviews-section .review-slide__btn-next',
			prevEl: '.stomatology-reviews-section .review-slide__btn-prev',
		},

		breakpoints: {
			1016: {
				spaceBetween: 24,
			},
		},
	}
)
