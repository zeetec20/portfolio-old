var key1 = 500, key2 = 1300;

function valueReset() {
    document.getElementById('progress1').value = 0;
    document.getElementById('progress2').value = 0;
    document.getElementById('progress3').value = 0;
    document.getElementById('progress4').value = 0;
    document.getElementById('progress5').value = 0;
    document.getElementById('progress6').value = 0;
}

function valuePercent() {
    let value = [0, 
        document.getElementById('progress1').value, 
        document.getElementById('progress2').value, 
        document.getElementById('progress3').value, 
        document.getElementById('progress4').value, 
        document.getElementById('progress5').value, 
        document.getElementById('progress6').value
    ];
    let number  = [0, 1, 2, 3, 4, 5, 6];
    let end     = [0, 80, 80, 60, 65, 55, 50];
    // html/css/javascript/php/python/django
    let timer = setInterval(() => {
        let a = 1;
        while (a < number.length) {
            if (value[1] == end[1] && value[2] == end[2] && value[3] == end[3] && value[4] == end[4] && value[5] == end[5] && value[6] == end[6]) {
                clearInterval(timer);
            } else {
                if (value[a] != end[a]) {
                    value[a] += 1;
                    document.getElementById('valuePercent' + a).innerHTML = value[a] + "%";
                    document.getElementById('progress' + a).value = end[a];
                }
            }
            a++;
        }
    }, 10);
}

function titleHidden(no) {
    if (no != 1) {
        document.getElementById("titleHome").style.marginTop = "-9.5%";
    }
    if (no != 2) {
        document.getElementById("titleAbout").style.left = "-16%";
    }
    if (no != 3) {
        document.getElementById("titleSkill").style.top = "251.5%";
        document.getElementById("titleSkill").style.opacity = "0";
    }
    if (no != 4) {
        
    }
    if (no != 5) {
        
    }
    if (no != 6) {
        
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
            document.getElementById("titleHome").style.transition = "margin-top 1s";
            document.getElementById("titleHome").style.marginTop = "9.5%";
            break;
        case 2:
            document.getElementById("titleAbout").style.left = "12%";
            break;
        case 3:
            document.getElementById("titleSkill").style.top = "261.5%";
            document.getElementById("titleSkill").style.opacity = "1";
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

function checkScroll() {
    let scroll = document.documentElement.scrollTop;
    var posision;

    if (scroll < key1) {
        posision = 1;
        navbarSpanVisible(1, "a");
        navbarSpanVisible(1, "b");
        navbarSpanHiddenAll(1);
        titleVisible(1);
        titleHidden(1);
    }else if (scroll < key2) {
        posision = 2;
        navbarSpanVisible(2, "a");
        navbarSpanVisible(2, "b");
        navbarSpanHiddenAll(2);
        titleVisible(2);
        titleHidden(2);
    }else if (scroll > key2) {
        posision = 3;
        navbarSpanVisible(3, "a");
        navbarSpanVisible(3, "b");
        navbarSpanHiddenAll(3);
        titleVisible(3);
        titleHidden(3);
        valuePercent();
    }

    if (posision != 3) {
        valueReset();
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
            destination = 0;
            break;
        
        case 2:
            destination = 803;
            break;

        case 3:
            destination = 1603;
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