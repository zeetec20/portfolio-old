const axios = require('axios')
import {about, portfolio, contact} from './variable'

export function addProject(number, name, description, language, linkProject, date) {
    let listProject = document.querySelector('.portfolio .listProject')

    let html = `
    <div class="col-lg-4 boxProject">
        <div class="number">
            <h1>${number}</h1>
        </div>
        <div class="project">
            <h1>${name}</h1>
            <h2 class="descriptionProject">${description}</h2>
            <h3>Language: <span class="language">${language}</span></h3>
            <h4>${date}</h4>
        </div>
        <div class="project1">
            <h1 onclick="window.open('${linkProject}', '_blank')">Open Project</h1>
        </div>
    </div>`

    listProject.innerHTML += html
}

export function clickNav(text) {
    let aboutOffset, portfolioOffset, contactOffset
    
    if (mediaQuery(1440, null)) {
        aboutOffset = about.offsetHeight + (about.offsetHeight * (3/100) )
        portfolioOffset = (portfolio.offsetHeight * 2) + (portfolio.offsetHeight * (3/100))
        contactOffset = (contact.offsetHeight * 3) + (contact.offsetHeight * (3/100))
    } else {
        aboutOffset = about.offsetHeight
        portfolioOffset = portfolio.offsetHeight + portfolio.offsetHeight
        contactOffset = (contact.offsetHeight * 2) + contact.offsetHeight
    }

    if (text == 'Home') {
        window.scrollTo({top: 0, behavior: 'smooth'})
    } else if (text == 'About Me') {
        window.scrollTo({top: aboutOffset, behavior: 'smooth'})
    } else if (text == 'Portfolio') {
        window.scrollTo({top: portfolioOffset, behavior: 'smooth'})
    } else if (text == 'Contact') {
        window.scrollTo({top: contactOffset, behavior: 'smooth'})
    }
}

export function clickButtonMenu(text) {
    clickNav(text)
}

export function getRepositoryGithub() {
    let listRepository = ['django-EComerce', 'Django-CRUD-User-FBV', 'django-library', 'DjangoChannels-Chat']

    axios({
        method: 'get',
        url: 'https://api.github.com/users/zeetec20/repos',
    })
    .then(function (response) {
        let forloop = 0
        response.data.forEach(repository => {
            if (listRepository.includes(repository['name'])) { // name, description, language, linkProject, date
    
                let name = repository['name']
                let description = repository['description']
                let language = repository['language']
                let linkProject = repository['html_url']
    
                if (description == null) {
                    description = 'No Description'
                }
                
                axios({
                    method: 'get',
                    url: `${repository['commits_url'].replace('{/sha}', '')}`,
                })
                .then(function (response) {
                    let length = response.data.length
                    var date = response.data[length - 1]['commit']['committer']['date'].slice(0, 10)
                    forloop += 1
    
                    addProject(forloop, name, description, language, linkProject, date)
                })
            }
        });
    })
}

export function mediaQuery(min = null, max = null) {
    let query

    if (max == null && min != null) {
        query = window.matchMedia(`(min-width: ${min}px)`)
    } else if (min == null && max != null) {
        query = window.matchMedia(`(max-width: ${max}px)`)
    } else if (min != null && max != null) {
        query = window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`)
    }

    return query.matches
}