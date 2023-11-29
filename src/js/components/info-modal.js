import {disableScroll} from '../functions/disable-scroll'
import {enableScroll} from '../functions/enable-scroll'

(function() {
    const btnOpen = document.querySelectorAll('.chemotherapy__item-btn')
    const btnClose = document.querySelector('.info-modal .rec-modal__btn-close')
    const overlay = document.querySelector('.info-modal__overlay')
    const modal = document.querySelector('.modal-wrapper_info-modal')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
            modal.classList.add('modal-wrapper_show')
            disableScroll()
        })
    }

    btnClose?.addEventListener('click', () => {
        modal.classList.remove('modal-wrapper_show')
        enableScroll()
    })

    overlay?.addEventListener('click', () => {
        modal.classList.remove('modal-wrapper_show')
        enableScroll()
    })
})()