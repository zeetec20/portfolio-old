
var preloader1, preloader2, preloader;
var timer = 0;

var timerPreloader = setInterval(() => { 
    timer += 1;
    if (timer >= 3) {
        preloader1 = true;
        window.preloader1;
        if (preloader2 == true) {
            
            var script = document.createElement('script');
            script.src = "script.js";
            var style = document.getElementById('style');
            style.setAttribute('href', './asset/css/style.css');

            // document.head.appendChild(style);
            document.getElementById('loading').style.opacity = "0";

            if (document.getElementById('loading').style.opacity == "0") {
                var timerLoading = setInterval(() => {
                    document.getElementById('loading').style.display = "none";
                    clearInterval(timerLoading);
                }, 900);
            }
            
            document.body.appendChild(script);

            clearInterval(timerPreloader);
        }
    }
}, 1000);

window.addEventListener("load", function () {
    window.preloader2 = true;
})
