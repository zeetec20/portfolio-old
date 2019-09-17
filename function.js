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
    if (scroll < 477) {
        navbarSpanVisible(1, "a");
        navbarSpanVisible(1, "b");
        navbarSpanHiddenAll(1);
    }else if (scroll > 477) {
        navbarSpanVisible(2, "a");
        navbarSpanVisible(2, "b");
        navbarSpanHiddenAll(2);
    }else if (condition) {
        
    }
}
