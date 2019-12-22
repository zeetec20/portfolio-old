import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

import * as funct from './js/funct'
import * as vrb from './js/variable'

funct.getRepositoryGithub()
vrb.interested.innerHTML += vrb.interestedArray.toString().replace(/,/g, ', ')

if (vrb.descriptionProject != null) {
    if (vrb.descriptionProject.innerHTML.split(' ').length < 13) {
        vrb.descriptionProject.innerHTML = 'test'
    } else {
        vrb.descriptionProject.innerHTML = vrb.descriptionProject.innerHTML.split(' ').slice(0, 14).toString().replace(/,/g, ' ') + '....'
    }
}

vrb.buttonMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        funct.clickButtonMenu(btn.innerHTML)
    })
});

document.body.onscroll = function (params) {
    // console.log(window.scrollY)
    if ((vrb.about.offsetHeight - (vrb.about.offsetHeight * 1/100)) < window.scrollY) {
        if (funct.mediaQuery(null, 640)) {
            document.querySelector('.home .title-website h1').style.transition = 'all 0.5s'
            document.querySelector('.home .title-website h1').style.fontSize = '22px'
            document.querySelector('.home .title-website h1').style.top = '2%'
        }
        if (funct.mediaQuery(null, 415)) {
            document.querySelector('.home .title-website h1').style.display = 'none'
        }

        vrb.nav.style.display = 'block'
        vrb.nav.style.visibility = 'visible'
        vrb.nav.style.transition = 'all 0.5s'
        vrb.nav.style.opacity = '1'
        vrb.nav.style.textShadow = '2px 2px #141212'
        vrb.title_website.style.textShadow = '2px 2px #141212'
    } else {
        if (funct.mediaQuery(null, 415)) {
            document.querySelector('.home .title-website h1').style.display = 'block'
        }
        document.querySelector('.home .title-website h1').style.fontSize = '26px'

        vrb.title_website.style.textShadow = null
        vrb.nav.style.transition = 'all 0s'
        vrb.nav.style.visibility = 'hidden'
        vrb.nav.style.opacity = '0'
    }
}

vrb.nav1.addEventListener('click', function () {
    funct.clickNav(vrb.nav1.innerHTML)
})

vrb.nav2.addEventListener('click', function () {
    funct.clickNav(vrb.nav2.innerHTML)
})

vrb.nav3.addEventListener('click', function () {
    funct.clickNav(vrb.nav3.innerHTML)
})

vrb.nav4.addEventListener('click', function () {
    funct.clickNav(vrb.nav4.innerHTML)
})

