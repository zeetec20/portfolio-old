var key1 = 500, key2 = 1540;

function titleMargin(params) {
    if (mediaQuery(1100, 1500).matches) {
        document.getElementById("titleHome").style.marginTop = "9.5%";
    }
}

function navbarSpanVisible(id1, id2) {
    document.getElementById("span"+id1+id2).style.transition = "all 1s";
    document.getElementById("span"+id1+id2).style.visibility = "visible";
    document.getElementById("span"+id1+id2).style.marginLeft = "0px";
    document.getElementById("nav-item"+id1).classList.add("active");
    if (id2 = "b") {
        document.getElementById("span"+id1+id2).style.marginLeft = "80%";
    }
}

function navbarSpanHidden(id1, id2) {
    document.getElementById("span"+id1+id2).style.visibility = "hidden";
}

function titleVisible(no) {
    switch (no) {
        case 1:
            document.getElementById("titleHome").style.marginTop = "9.5%";
            break;
        case 2:
            document.getElementById("titleAbout").style.left = "12%";
            break;
        case 3:
            // document.getElementById("titleHome").style.marginTop = "9.5%";
            break;
        case 4:
            // document.getElementById("titleHome").style.marginTop = "9.5%";
            break;
        case 5:
            // document.getElementById("titleHome").style.marginTop = "9.5%";
            break;
            
        default:
            break;
    }
}

function navbarSpanHiddenAll(id) {
    for (let id2 = 1; id2 < 6; id2++) {
        if (id2 == id) {
            navbarSpanVisible(id, "a");
            navbarSpanVisible(id, "b");
        }else{
            let spanA = document.getElementById("span"+id2+"a");
            let spanB = document.getElementById("span"+id2+"b");
            document.getElementById('nav-item'+id2).classList.remove("active");
            spanA.style.marginLeft = "-80px";
            spanB.style.marginLeft = "-80px";
            spanA.style.visibility = "hidden";
            spanB.style.visibility = "hidden";
        }
    }
}

function navbarSpanCheckScroll() {
    let scroll = document.documentElement.scrollTop;
    if (scroll < key1) {
        navbarSpanVisible(1, "a");
        navbarSpanVisible(1, "b");
        navbarSpanHiddenAll(1);
        titleVisible(1);
    }else if (scroll < key2) {
        navbarSpanVisible(2, "a");
        navbarSpanVisible(2, "b");
        navbarSpanHiddenAll(2);
        titleVisible(2);
    }else if (condition) {
        
    }
}

function mediaQuery(min, max) {
    let maxWidth = "(max-width: " + max + "px)";
    let minWidth = "(min-width: " + min + "px)";
    var mediaQuery = window.matchMedia(minWidth + " and " + maxWidth);
    return mediaQuery;
}

function navbarClick(no) {
    let key, destination;
    switch (no) {
        case 1:
            key = key1;
            destination = "0";
            break;
        
        case 2:
            key = key2;
            destination = "803";
            break;
        case 3:
            break;

        case 4:

            break;

        case 5:

            break;
    }

    window.scrollTo({top: destination, behavior: "smooth"})
}

function titleResetMargin(except) {
    let title1 = document.getElementById("titleHome").style.marginTop = "-9.5%";

    if (mediaQuery(1100, 1500).matches) {
        switch (except) {
            case 1:
                
                break;
            case 2:
                title1;
                break;

            default:
                break;
        }
    }
}