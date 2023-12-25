import {inputMaskCreator} from "../_functions"

(function () {
  const tel = document.querySelectorAll('.docs-contact-block__form #tel')
  const submit = document.querySelectorAll('.docs-contact-block__btn-sub')
  const placeholder = document.querySelectorAll('.docs-contact-block__field-placeholder')
  const filedWrapper = document.querySelectorAll('.docs-contact-block__filed-wrapper')
  const successText = document.querySelectorAll('.docs-contact-block__success-sub')

  const telRe = /[0-9]/
  const telPattern = '+ 7 (___) ___ __ __'
  for (let i = 0; i < tel?.length; i++) {
    inputMaskCreator(tel[i], telPattern, '_', telRe)

    tel[i]?.addEventListener('input', () => {
      if (tel[i].value[5] !== '9') {
        tel[i].classList.add('field-error')

        submit[i].disabled = true
        submit[i]?.classList.add('btn-disabled')
      } else {
        tel[i].classList.remove('field-error')

        submit[i].disabled = false
        submit[i]?.classList.remove('btn-disabled')
      }

      if (!tel[i].value || tel[i].value.length < 11 ||
        tel[i].value.indexOf('_') > -1 || tel[i].value[5] !== '9') {
        submit[i].disabled = true
        submit[i]?.classList.add('btn-disabled')
      } else {
        submit[i].disabled = false
        submit[i]?.classList.remove('btn-disabled')
      }
    })

    tel[i]?.addEventListener('blur', () => {
      if (tel[i]?.value.length !== 0) {
        placeholder[i]?.classList.add('is-hidden')
      } else {
        placeholder[i]?.classList.remove('is-hidden')
        tel[i].classList.remove('field-error')
      }
    })

    submit[i]?.addEventListener('click', (e) => {
      if (!tel[i].value || tel[i].value.length < 11 || tel[i].value.indexOf('_') > -1) {
      } else {
        const checkbox = submit[i].parentNode.parentNode.firstElementChild.firstElementChild

        if (checkbox) {
          if (checkbox.checked) {
            filedWrapper[i]?.classList.add('hidden-with-animate-opac')
            console.log(checkbox[i]?.parentNode)
            checkbox.parentNode.classList.add('hidden-with-animate-opac')
            successText[i]?.classList.add('show-with-animate-opac')
            setTimeout(() => {
              successText[i]?.classList.add('dislay-visible')
            }, 470)
          } else {
            checkbox.parentNode.classList.add("error")
          }
        } else {
          filedWrapper[i]?.classList.add('hidden-with-animate-opac')
          checkbox.parentNode.classList.add('hidden-with-animate-opac')
          successText[i]?.classList.add('show-with-animate-opac')
          setTimeout(() => {
            successText[i]?.classList.add('dislay-visible')
          }, 470)
        }
      }
    })

    placeholder[i]?.addEventListener('click', () => {
      tel[i].focus()
    })
  }

})()
