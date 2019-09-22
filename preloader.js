
var preloader1, preloader2, preloader;
var timer = 0;

document.getElementById("titleHome").style.marginTop = "-9.5%";

var timerPreloader = setInterval(() => { 
    timer += 1;
    if (timer >= 3) {
        preloader1 = true;
        window.preloader1;
        if (preloader2 == true) {
            var script1 = document.createElement('script');
            script1.setAttribute('src', 'function.js');

            var script2 = document.createElement('script');
            script2.setAttribute('src', 'script.js');

            var style = document.getElementById('style');
            style.setAttribute('href', './asset/css/style.css');

            // document.head.appendChild(style);
            document.getElementById('loading').style.opacity = "0";

            if (document.getElementById('loading').style.opacity == "0") {
                var timerLoading = setInterval(() => {
                    document.getElementById('loading').style.display = "none";
                    document.body.appendChild(script1);
                    document.body.appendChild(script2);
                    clearInterval(timerLoading);
                }, 500);
            }
            

            clearInterval(timerPreloader);
        }
    }
}, 1000);

window.addEventListener("load", function () {
    window.preloader2 = true;
})
