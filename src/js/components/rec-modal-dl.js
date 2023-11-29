import { inputMaskCreator } from "../_functions"
import { disableScroll } from "../functions/disable-scroll"
import { enableScroll } from "../functions/enable-scroll"

(function () {

    const form = document.querySelector('.rec-modal-dl .check-up-modal__form')
    const tel = document.querySelector('.rec-modal-dl #rec-modal-dl__tel')
    const radio1 = document.querySelector('.rec-modal-dl #rec-modal-radio-1')
    const radio2 = document.querySelector('.rec-modal-dl #rec-modal-radio-2')
    const submit = document.querySelector('.rec-modal-dl .btn-rec')
    const placeholder = document.querySelector('.rec-modal-dl .check-up-modal__placeholder-tel')

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
                modal.style = `max-height: 37.65rem; height: 100%;`
            } else {
                modal.style = `max-height: 53.6rem; height: 100%;`
            }
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })

    const successText = document.querySelector('.rec-modal-dl .rec-modal__success-text')
    const btnOk = document.querySelector('.rec-modal-dl .btn-ok')

    const btnOpen = document.querySelectorAll('.card-consult__btn-rec')
    const btnClose = document.querySelector('.rec-modal-dl .rec-modal__btn-close')
    const overlay = document.querySelector('.rec-modal-dl__overlay')
    const modalWrapper = document.querySelector('.modal-wrapper_rec-modal-dl')
    const modal = document.querySelector('.rec-modal-dl')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
            if (btnOpen[i]?.parentNode.parentNode.parentNode.classList.contains('card-consult_online')) {
                console.log(radio2)
                radio2.checked = true
            } else {
                radio1.checked = true
            }
            modalWrapper.classList.add('modal-wrapper_show')
            disableScroll()
            modal.style = `max-height: ${modal.offsetHeight}px; height: 100%;`
        })
    }

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
