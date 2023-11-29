(function () {
    const advantages = document.querySelector('.about-section__advantages-swiper')
    const docs = document.querySelector('.doctors-section__doctors-swiper')
    const diagnostics = document.querySelector('.diagnostics-section__swiper')
    const articles = document.querySelector('.articles-section__content')
    const footerNavItems = document.querySelectorAll('.footer__nav-item')
    const rewiew = document.querySelector('.pet-goes-section__review-swiper')
    const methods = document.querySelector('.methods-swiper')

    let advantagesPos = advantages?.getBoundingClientRect()
    let docsPos = docs?.getBoundingClientRect()
    let diagnosticsPos = diagnostics?.getBoundingClientRect()
    let articlesPos = articles?.getBoundingClientRect()
    let rewiewPos = rewiew?.getBoundingClientRect()
    let methodsPos = methods?.getBoundingClientRect()

    let footerNavItemsPos = []

    for (let i = 0; i < footerNavItems?.length; i++) {
        footerNavItemsPos.push(footerNavItems[i]?.getBoundingClientRect())
    }

    if (window.innerHeight >= advantagesPos?.top) {
        advantages.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    if (window.innerHeight >= docsPos?.top) {
        docs.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    if (window.innerHeight >= diagnosticsPos?.top) {
        diagnostics.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    if (window.innerHeight >= articlesPos?.top) {
        articles.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    if (window.innerHeight >= rewiewPos?.top) {
        rewiew.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    if (window.innerHeight >= methodsPos?.top) {
        methods.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
    }

    for (let i = 0; i < footerNavItemsPos?.length; i++) {
        if (window.innerHeight >= footerNavItemsPos[i].top) {
            footerNavItems[i].style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

    }

    window.addEventListener('scroll', () => {
        let advantagesPos = advantages?.getBoundingClientRect()
        let docsPos = docs?.getBoundingClientRect()
        let diagnosticsPos = diagnostics?.getBoundingClientRect()
        let articlesPos = articles?.getBoundingClientRect()
        let rewiewPos = rewiew?.getBoundingClientRect()
        let methodsPos = methods?.getBoundingClientRect()

        let footerNavItemsPos = []
        for (let i = 0; i < footerNavItems?.length; i++) {
            footerNavItemsPos.push(footerNavItems[i]?.getBoundingClientRect())
        }

        if (window.innerHeight >= advantagesPos?.top) {
            advantages.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        if (window.innerHeight >= docsPos?.top) {
            docs.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        if (window.innerHeight >= diagnosticsPos?.top) {
            diagnostics.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        if (window.innerHeight >= articlesPos?.top) {
            articles.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        if (window.innerHeight >= rewiewPos?.top) {
            rewiew.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        if (window.innerHeight >= methodsPos?.top) {
            methods.style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
        }

        for (let i = 0; i < footerNavItemsPos?.length; i++) {
            if (window.innerHeight >= footerNavItemsPos[i].top) {
                footerNavItems[i].style = 'visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.75s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.75s cubic-bezier(0.5, 0, 0, 1) 0s;'
            }

        }
    })
})()