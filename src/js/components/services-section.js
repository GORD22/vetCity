(function () {
    const smallDocBlockBtn = document.querySelector('.docs-small-block__btn')
    const btnOpen = document.querySelectorAll('.services-section__services-item-top')
    const dropList = document.querySelectorAll('.services-section__drop-list')

    for (let i = 0; i < btnOpen?.length; i++) {
        btnOpen[i]?.addEventListener('click', () => {
/*             for (let j = 0; j < btnOpen?.length; j++) {
                if (j !== i) {
                    btnOpen[j]?.classList.remove('services-section__services-item-top_open')
                    dropList[j]?.classList.remove('services-section__drop-list_show')
                }
            } */
                btnOpen[i]?.classList.toggle('services-section__services-item-top_open')
                dropList[i]?.classList.toggle('services-section__drop-list_show')
                /* if (btnOpen[i].classList.contains('services-section__services-item-top_open')) {
                        btnOpen[i]?.scrollIntoView({
                            block: 'center',
                            behavior: 'smooth'
                        })
                } */
        })
    }

    smallDocBlockBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        /* for (let i = 0; i < btnOpen?.length; i++) {
            if (i !== 0) {
                btnOpen[i]?.classList.remove('services-section__services-item-top_open')
                dropList[i]?.classList.remove('services-section__drop-list_show')
            }
        } */
        btnOpen[0]?.classList.add('services-section__services-item-top_open')
        dropList[0]?.classList.add('services-section__drop-list_show')
        /* setTimeout(() => {
            btnOpen[0]?.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            })
        }, 1500) */
    })
})()