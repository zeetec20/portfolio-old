
var color = 800;

document.body.style.overflow = "hidden";


window.addEventListener("load", function () {
    document.getElementById('loading').style.display = "none";
    document.body.style.overflow = "visible";
})

window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
    // if (scroll >= 50) {
    //     color = scroll * 15;
    // }
    navbarSpanCheckScroll();
    if (document.documentElement.scrollTop < key1) {
        titleResetMargin[1];
        document.getElementById("titleAbout").style.left = "-16%";
    }
    if (document.documentElement.scrollTop >= key1 && document.documentElement.scrollTop < key2) {
        console.log('odoqidq');
        document.getElementById("titleHome").style.marginTop = "-9.5%";
    }
});



if (mediaQuery(1100, 1500).matches) {
    document.getElementById("titleHome").style.marginTop = "9.5%";
}

navbarClick(1);

navbarSpanCheckScroll();
