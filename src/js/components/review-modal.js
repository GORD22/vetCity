import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'
;(function () {
	const btnOpen = document.getElementById('why-btn')
	const btnClose = document.getElementById('why-close')
	const overlay = document.querySelector('.why-modal__overlay')
	const modal = document.getElementById('popup-why')

	btnOpen?.addEventListener('click', () => {
		console.log('open')
		modal.classList.add('modal-wrapper_show')
		disableScroll()
	})

	btnClose?.addEventListener('click', () => {
		modal.classList.remove('modal-wrapper_show')
		enableScroll()
	})

	overlay?.addEventListener('click', () => {
		modal.classList.remove('modal-wrapper_show')
		enableScroll()
	})
})()
