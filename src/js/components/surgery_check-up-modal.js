import { inputMaskCreator } from "../_functions"
import { disableScroll } from "../functions/disable-scroll"
import { enableScroll } from "../functions/enable-scroll"

(function()  {

    const form = document.querySelector('#surgery_check-up-modal .check-up-modal__form')
    const tel = document.querySelector('#surgery_check-up-modal .check-up-modal__form #check-up-modal__tel')
    const submit = document.querySelector('#surgery_check-up-modal .btn-rec')
    const btnContinue = document.querySelector('#surgery_check-up-modal .btn-continue')
    const placeholder = document.querySelector('#surgery_check-up-modal .check-up-modal__placeholder-tel')

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
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })

    const successText = document.querySelector('#surgery_check-up-modal .rec-modal__success-text')
    const btnOk = document.querySelector('#surgery_check-up-modal .btn-ok')

    const btnOpen = document.querySelectorAll('.surgery_card-diagnostics .card-diagnostics__detail')
    const btnClose = document.querySelector('#surgery_check-up-modal .rec-modal__btn-close')
    const overlay = document.querySelector('.check-up-modal__overlay')
    const modal = document.querySelector('.modal-wrapper_check-up-modal')
    const confidentiality = document.querySelector('#surgery_check-up-modal .check-up-modal__confidentiality')
    const infoBlock = document.querySelector('.check-up-modal__info-block')
    const modalWrapper = document.querySelector('.modal-wrapper_check-up-modal')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
            modal.classList.add('modal-wrapper_show')
            disableScroll()
        })
    }

    overlay?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        infoBlock?.classList.remove('hidden')
        btnContinue?.classList.remove('hidden')
        form?.classList.add('hidden')
        submit?.classList.add('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    btnContinue?.addEventListener('click', () => {
        infoBlock?.classList.add('hidden')
        btnContinue?.classList.add('hidden')
        form?.classList.remove('hidden')
        submit?.classList.remove('hidden')
        confidentiality?.classList.remove('hidden')
    })

    btnClose?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        infoBlock?.classList.remove('hidden')
        btnContinue?.classList.remove('hidden')
        form?.classList.add('hidden')
        submit?.classList.add('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    btnOk?.addEventListener('click', () => {
        modal.classList.remove('modal-wrapper_show')
        enableScroll()
    })
})()
