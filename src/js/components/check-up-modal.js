import { inputMaskCreator } from "../_functions"
import { disableScroll } from "../functions/disable-scroll"
import { enableScroll } from "../functions/enable-scroll"

(function()  {

    const form = document.querySelector('#onkology_check-up-modal .check-up-modal__form')
    const tel = document.querySelector('#onkology_check-up-modal .check-up-modal__form #check-up-modal__tel')
    const submit = document.querySelector('#onkology_check-up-modal .btn-rec')
    const placeholder = document.querySelector('#onkology_check-up-modal .check-up-modal__placeholder-tel')

    const telRe = /[0-9]/
    const telPattern = '+ 7 (___) ___ __ __'
    inputMaskCreator(tel, telPattern, '_', telRe)

    tel?.addEventListener('input', () => {
        if (tel.value[5] !== '9') {
            tel.classList.add('field-error')

            submit.disabled = true
            submit?.classList.add('btn-disabled')
        } else {
            tel.classList.remove('field-error')

            submit.disabled = false
            submit?.classList.remove('btn-disabled')
        }

        if (!tel.value || tel.value.length < 11 ||
            tel.value.indexOf('_') > -1 || tel.value[5] !== '9') {
            submit.disabled = true
            submit?.classList.add('btn-disabled')
        } else {
            submit.disabled = false
            submit?.classList.remove('btn-disabled')
        }
    })

    tel?.addEventListener('blur', () => {
        if (tel?.value.length !== 0) {
            placeholder?.classList.add('is-hidden')
        } else {
            placeholder?.classList.remove('is-hidden')
            tel.classList.remove('field-error')
        }
    })

    submit?.addEventListener('click', (e) => {
        if (!tel.value || tel.value.length < 11 ||
            tel.value.indexOf('_') > -1) {
            e.preventDefault()
        } else {
            form?.classList.add('hidden')
            submit?.classList.add('hidden')
            successText?.classList.add('show')
            btnOk?.classList.add('show')
            if (window.innerWidth > 1016) {
                modal.style = `max-height: 36.75rem; height: 100%;`
            } else {
                modal.style = `max-height: 53.6rem; height: 100%;`
            }
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })

    const successText = document.querySelector('#onkology_check-up-modal .rec-modal__success-text')
    const btnOk = document.querySelector('#onkology_check-up-modal .btn-ok')

    const btnOpen = document.querySelector('.check-up-section__btn-rec')
    const btnClose = document.querySelector('#onkology_check-up-modal .rec-modal__btn-close')
    const overlay = document.querySelector('.check-up-modal__overlay')
    const modalWrapper = document.querySelector('.modal-wrapper_check-up-modal')
    const modal = document.querySelector('#onkology_check-up-modal')

    btnOpen?.addEventListener('click', () => {
        modalWrapper.classList.add('modal-wrapper_show')
        disableScroll()
        modal.style = `max-height: ${modal.offsetHeight}px; height: 100%;`
    })

    btnClose?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        form?.classList.remove('hidden')
        submit?.classList.remove('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    overlay?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        form?.classList.remove('hidden')
        submit?.classList.remove('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    btnOk?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
    })
})()
