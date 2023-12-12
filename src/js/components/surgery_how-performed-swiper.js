import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const surgeryHowPerformedSwiper = new Swiper('.how-performed-section__swiper', {
	loop: true,
	slidesPerView: 'auto',
	modules: [Navigation],
	navigation: {
		prevEl: '.about-section__btn-prev',
		nextEl: '.about-section__btn-next',
	},
	on: {
		slideChange: function () {
			updateActiveBullet(this.realIndex)
		},
		init: function () {
			updateActiveBullet(this.realIndex)
		},
	},
})

function updateActiveBullet(index) {
	const bullets = document.querySelectorAll('.swiper-pagination-bullet')
	bullets.forEach((bullet, i) => {
		if (i === index) {
			bullet.classList.add('swiper-pagination-bullet-active')
		} else {
			bullet.classList.remove('swiper-pagination-bullet-active')
		}
	})
}

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
