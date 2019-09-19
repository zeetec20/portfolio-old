window.addEventListener("scroll", function () {
    // var scroll = document.documentElement.scrollTop;
    // console.log(scroll);
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