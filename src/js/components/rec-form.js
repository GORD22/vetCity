import { inputMaskCreator } from "../_functions"

(function()  {
    const tel = document.querySelector('.rec-section__form #rec-tel')
    const submit = document.querySelector('.rec-section__btn-sub')
    const placeholder = document.querySelector('.rec-section__placeholder-tel')

    const telRe = /[0-9]/
    const telPattern = '+ 7 (___) ___ __ __'
    inputMaskCreator(tel, telPattern, '_', telRe)

    tel?.addEventListener('input', () => {
        if (tel.value[5] !== '9') {
            tel.classList.add('field-error')

            submit.disabled = true
            submit?.classList.add('btn-disabled-rec')
        } else {
            tel.classList.remove('field-error')

            submit.disabled = false
            submit?.classList.remove('btn-disabled-rec')
        }

        if (!tel.value || tel.value.length < 11 ||
            tel.value.indexOf('_') > -1 || tel.value[5] !== '9') {
            submit.disabled = true
            submit?.classList.add('btn-disabled-rec')
        } else {
            submit.disabled = false
            submit?.classList.remove('btn-disabled-rec')
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
        }
    })

    placeholder?.addEventListener('click', () => {
        tel.focus()
    })
})()
