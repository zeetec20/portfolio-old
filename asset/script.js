getRepositoryGithub()
changeButtonNav()

let about = document.querySelector('.background-home')
let portfolio = document.querySelector('.background-portfolio')
let contact = document.querySelector('.background-contact')

// let wordJob = document.querySelector('.about .user .job h1')

let title_website = document.querySelector('.home .title-website')

let nav = document.querySelector('.navbar .nav a')
let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')
let nav3 = document.querySelector('.nav3')
let nav4 = document.querySelector('.nav4')

let interested = document.querySelector('#interestedItem')
let interestedArray = ['Python', 'Django', 'JavaScript', 'Vue']

let descriptionProject = document.querySelector('.portfolio .project h2')

interested.innerHTML += interestedArray.toString().replace(/,/g, ', ')

if (descriptionProject != null) {
    if (descriptionProject.innerHTML.split(' ').length < 13) {
        descriptionProject.innerHTML = 'test'
    } else {
        descriptionProject.innerHTML = descriptionProject.innerHTML.split(' ').slice(0, 14).toString().replace(/,/g, ' ') + '....'
    }
}

document.body.onscroll = function (params) {
    // console.log(window.scrollY)
    if ((about.offsetHeight - (about.offsetHeight * 1/100)) < window.scrollY) {
        if (mediaQuery(null, 640)) {
            document.querySelector('.home .title-website h1').style.transition = 'all 0.5s'
            document.querySelector('.home .title-website h1').style.fontSize = '22px'
            document.querySelector('.home .title-website h1').style.top = '2%'
        }
        if (mediaQuery(null, 415)) {
            document.querySelector('.home .title-website h1').style.display = 'none'
        }

        nav.style.display = 'block'
        nav.style.visibility = 'visible'
        nav.style.transition = 'all 0.5s'
        nav.style.opacity = '1'
        nav.style.textShadow = '2px 2px #141212'
        title_website.style.textShadow = '2px 2px #141212'
    } else {
        if (mediaQuery(null, 415)) {
            document.querySelector('.home .title-website h1').style.display = 'block'
        }
        document.querySelector('.home .title-website h1').style.fontSize = '40px'

        title_website.style.textShadow = null
        nav.style.transition = 'all 0s'
        nav.style.visibility = 'hidden'
        nav.style.opacity = '0'
    }
}

nav1.addEventListener('click', function () {
    clickNav(nav1.innerHTML)
})

nav2.addEventListener('click', function () {
    clickNav(nav2.innerHTML)
})

nav3.addEventListener('click', function () {
    clickNav(nav3.innerHTML)
})

nav4.addEventListener('click', function () {
    clickNav(nav4.innerHTML)
})
