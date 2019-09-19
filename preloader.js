
var preloader1, preloader2, preloader;
var timer = 0;

document.body.style.overflow = "hidden";

var timerPreloader = setInterval(() => { 
    timer += 1;
    if (timer >= 3) {
        preloader1 = true;
        window.preloader1;
        if (preloader2 == true) {
            document.getElementById('loading').style.display = "none";
            document.body.style.overflow = "visible";
            
            var script = document.createElement('script');
            script.setAttribute('src','script.js');
            document.body.appendChild(script);

            clearInterval(timerPreloader);
        }
    }
}, 1000);

window.addEventListener("load", function () {
    window.preloader2 = true;
})
