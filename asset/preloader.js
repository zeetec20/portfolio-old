let timer = 0
let preloader1, preloader2, preloader;

var timerPreloader = setInterval(() => { 
    timer += 1;
    if (timer > 2) {
        if (document.readyState == 'complete') {
            clearInterval(timerPreloader);
            document.querySelector('.backgroundLoader').style.transition = 'all 0.5s'
            document.querySelector('.backgroundLoader').style.opacity = '0'
            document.querySelector('body').style.overflowY = 'visible'
            setTimeout(() => {
                document.querySelector('.backgroundLoader').innerHTML = null
                document.querySelector('.backgroundLoader').style.display = 'none'
            }, 500)
        }
    }
}, 1000);