(function () {
    const video = document.querySelector(".video");
    const playBtns = document.querySelector(".btn-play");


    playBtns?.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            video.controls = true;
            playBtns.classList.add('hidden');
        }
    })
})()