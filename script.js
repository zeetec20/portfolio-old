window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
    checkScroll();
});


if (mediaQuery(1100, 1500).matches) {

}

navbarClick(1);

checkScroll();
