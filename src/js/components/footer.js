(function()  {
    const email = document.querySelector('.footer__form #footer-email')
    const submit = document.querySelector('.footer__btn-sub')

    const emailRe = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/

    email?.addEventListener('input', () => {
        if (!email.value || !emailRe.test(email.value)) {
            submit.disabled = true
            submit?.classList.add('btn-disabled')
        } else {
            submit.disabled = false
            submit?.classList.remove('btn-disabled')
        }

        if (!emailRe.test(email.value)) {
            email.classList.add('field-error')

            submit.disabled = true
            submit?.classList.add('btn-disabled')
        } else {
            email.classList.remove('field-error')

            submit.disabled = false
            submit?.classList.remove('btn-disabled')
        }
    })

    submit?.addEventListener('click', (e) => {
        if (!email.value || !emailRe.test(email.value)) {
            e.preventDefault()
        }
    })
})()