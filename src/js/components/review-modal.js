import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'

(function () {
  const btnOpen = document.querySelectorAll('.review-slide__read-all')
  const btnClose = document.querySelector('.review-modal .rec-modal__btn-close')
  const overlay = document.querySelector('.review-modal__overlay')
  const modal = document.querySelector('.modal-wrapper_review-modal')

  for (let i = 0; i < btnOpen?.length; i++) {
    btnOpen[i]?.addEventListener('click', () => {
      console.log('sdsds')
      modal.classList.add('modal-wrapper_show')
      disableScroll()
      modal.style = `max-height: ${modal.offsetHeight}px; height: 100%;`
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
