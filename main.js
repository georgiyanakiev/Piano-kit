document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    window.addEventListener('keydown', function (event) {
        console.log(event.keyCode);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        console.log(audio);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('played');
    });

    function removeTransition(event) {
        if (event.propertyName !== 'transform') return;
        console.log(event.propertyName);
        this.classList.remove('played');
    }

    const btns = document.querySelectorAll('.key');
    console.log(btns);
    btns.forEach(key => key.addEventListener('transitionend', removeTransition));



});