/* (function () {
    const btnOpen = document.querySelectorAll('.directions-section__item-top')
    const dropList = document.querySelectorAll('.directions-section__item-descr-wrapper')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
            for (let j = 0; j < btnOpen?.length; j++) {
                if (j !== i) {
                    btnOpen[j]?.classList.remove('directions-section__item-top_open')
                    dropList[j]?.classList.remove('directions-section__item-descr-wrapper_show')
                }
            }
            btnOpen[i]?.classList.toggle('directions-section__item-top_open')
            dropList[i]?.classList.toggle('directions-section__item-descr-wrapper_show')
            setTimeout(() => {
                dropList[i]?.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                })
            }, 350)
        })
    }
})() */