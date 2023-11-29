import { inputMaskCreator } from "../_functions"
import { disableScroll } from "../functions/disable-scroll"
import { enableScroll } from "../functions/enable-scroll"

(function () {

    const form = document.querySelector('.rec-modal .check-up-modal__form')
    const tel = document.querySelector('.rec-modal #rec-modal__tel')
    const name = document.querySelector('.rec-modal #rec-modal__name')
    const btnContinue = document.querySelector('.rec-modal .btn-continue')
    const submit = document.querySelector('.rec-modal .btn-rec')
    const placeholder = document.querySelector('.rec-modal .check-up-modal__placeholder-tel_rec')

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

    name?.addEventListener('blur', () => {
        if (!name?.value) {
            name.classList.add('field-error')
        }
    })

    name?.addEventListener('input', () => {
        if (name?.value) {
            name.classList.remove('field-error')
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
                modal.style = `max-height: 100vh`
            } else {
                modal.style = `max-height: 100vh`
            }
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })

    const btnOpen = document.querySelectorAll('.card-doc_new__detail')
    const btnClose = document.querySelector('.rec-modal .rec-modal__btn-close')
    const overlay = document.querySelector('.rec-modal__overlay')
    const modalWrapper = document.querySelector('.modal-wrapper_rec-modal')
    const modal = document.querySelector('.rec-modal')
    const confidentiality = document.querySelector('.rec-modal .check-up-modal__confidentiality')
    const infoBlock = document.querySelector('.rec-modal__info-block')
    const successText = document.querySelector('.rec-modal .rec-modal__success-text')
    const btnOk = document.querySelector('.rec-modal .btn-ok')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
            modalWrapper.classList.add('modal-wrapper_show')
            disableScroll()
            modal.style = `max-height: ${modal.offsetHeight}px; height: 100%;`
        })
    }

    btnContinue?.addEventListener('click', () => {
        infoBlock?.classList.add('hidden')
        btnContinue?.classList.add('hidden')
        form?.classList.remove('hidden')
        submit?.classList.remove('hidden')
        confidentiality?.classList.remove('hidden')
        if (window.innerWidth > 1016) {
            modal.style = `max-height: 100vh`
        } else {
            modal.style = `max-height: 100vh`
        }
    })

    btnClose?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        infoBlock?.classList.remove('hidden')
        btnContinue?.classList.remove('hidden')
        form?.classList.add('hidden')
        submit?.classList.add('hidden')
        confidentiality?.classList.add('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    overlay?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        infoBlock?.classList.remove('hidden')
        btnContinue?.classList.remove('hidden')
        form?.classList.add('hidden')
        submit?.classList.add('hidden')
        confidentiality?.classList.add('hidden')
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
