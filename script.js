

var color = 800;

window.addEventListener("scroll", function (event) {
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
    // if (scroll >= 50) {
    //     color = scroll * 15;
    // }
    navbarSpanCheckScroll();
});

navbarSpanCheckScroll();
