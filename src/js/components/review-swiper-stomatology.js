import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const reviewSwiperStomatology = new Swiper(
	'.pet-goes-section__review-swiper_stomatology',
	{
		modules: [Navigation],
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		spaceBetween: 16,
		navigation: {
			nextEl: '.review-slide__btn-next',
			prevEl: '.review-slide__btn-prev',
		},

		breakpoints: {
			1016: {
				spaceBetween: 22,
			},
		},
	}
)
