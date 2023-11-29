import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'

(function () {
    const btnOpen = document.querySelector('.services-section__consult-online-btn')
    const btnClose = document.querySelector('.online-consult-suitable-modal .rec-modal__btn-close')
    const overlay = document.querySelector('.online-consult-suitable-modal__overlay')
    const modal = document.querySelector('.modal-wrapper_online-consult-suitable-modal')

    btnOpen?.addEventListener('click', () => {
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