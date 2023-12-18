import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const surgeryHowPerformedSwiper = new Swiper('.surgery__how-performed-section__swiper', {
	loop: true,
	slidesPerView: 'auto',
	modules: [Navigation],
	navigation: {
		prevEl: '.about-section__btn-prev',
		nextEl: '.about-section__btn-next',
	},
})

function handleSwiper() {
	if (window.innerWidth > 1016) {
		surgeryHowPerformedSwiper.enable()
	} else {
		surgeryHowPerformedSwiper.disable()
	}
}

handleSwiper()

window.addEventListener('resize', handleSwiper)

if (window.innerWidth > 1016) {
	surgeryHowPerformedSwiper?.enable()
}

window.addEventListener('resize', () => {
	if (window.innerWidth > 1016) {
		surgeryHowPerformedSwiper?.enable()
	} else {
		surgeryHowPerformedSwiper.enabled = false
	}
})
