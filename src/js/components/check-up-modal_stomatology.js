import { inputMaskCreator } from "../_functions"
import { disableScroll } from "../functions/disable-scroll"
import { enableScroll } from "../functions/enable-scroll"

(function()  {

    const form = document.querySelector('.check-up-modal_stomatology .check-up-modal__form')
    const tel = document.querySelector('.check-up-modal_stomatology .check-up-modal__form #check-up-modal__tel')
    const submit = document.querySelector('.check-up-modal_stomatology .btn-rec')
    const btnContinue = document.querySelector('.check-up-modal_stomatology .btn-continue')
    const placeholder = document.querySelector('.check-up-modal_stomatology .check-up-modal__placeholder-tel_rec_stomatology')

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
            btnBack?.classList.add('hidden')
      logo?.classList.remove('hidden')
      confidentiality?.classList.add('hidden')
      priceBlock?.classList.add('hidden')
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })

    const successText = document.querySelector('.check-up-modal_stomatology .rec-modal__success-text_stomatology')
    const btnOk = document.querySelector('.check-up-modal_stomatology .btn-ok')

    const btnOpen = document.querySelectorAll('.stomatology_card-diagnostics .card-diagnostics__detail')
    const btnClose = document.querySelector('.check-up-modal_stomatology .rec-modal__btn-close')
    const overlay = document.querySelector('.check-up-modal__overlay')
    const modal = document.querySelector('.modal-wrapper_check-up-modal')
    const priceBlock = document.querySelector('.check-up-modal_stomatology .rec-modal__price-block')
  const confidentiality = document.querySelector('.check-up-modal_stomatology .check-up-modal__confidentiality_stomatology')
  const btnBack = document.querySelector('.check-up-modal_stomatology .rec-modal__btn-back_stomatology')
  const logo = document.querySelector('.check-up-modal_stomatology .rec-modal__icon-wrapper_stomatology')
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
        btnBack?.classList.add('hidden')
    logo?.classList.remove('hidden')
    confidentiality?.classList.add('hidden')
    priceBlock?.classList.remove('hidden')
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
        btnBack?.classList.remove('hidden')
    logo?.classList.add('hidden')
    confidentiality?.classList.remove('hidden')
    })

    btnClose?.addEventListener('click', () => {
        modalWrapper.classList.remove('modal-wrapper_show')
        enableScroll()
        infoBlock?.classList.remove('hidden')
        btnContinue?.classList.remove('hidden')
        form?.classList.add('hidden')
        submit?.classList.add('hidden')
        btnBack?.classList.add('hidden')
    logo?.classList.remove('hidden')
    confidentiality?.classList.add('hidden')
    priceBlock?.classList.remove('hidden')
        successText?.classList.remove('show')
        btnOk?.classList.remove('show')
        modal.style.removeProperty('max-height')
        modal.style.removeProperty('height')
    })

    btnBack?.addEventListener('click', () => {
      infoBlock?.classList.remove('hidden')
      btnContinue?.classList.remove('hidden')
      form?.classList.add('hidden')
      submit?.classList.add('hidden')
      btnBack?.classList.add('hidden')
      logo?.classList.remove('hidden')
      confidentiality?.classList.add('hidden')
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
