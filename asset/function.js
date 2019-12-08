function changeButtonNav() {
    let html = ''
    + '<div class="nav col-lg-4">'
        + '<button type="button" class="btn rounded-0 button2" onclick="clickButtonMenu(this.innerHTML)">About Me</button>'
    + '</div>'
    + '<div class="nav col-lg-4">'
        + '<button type="button" class="btn rounded-0 button1" onclick="clickButtonMenu(this.innerHTML)">Portfolio</button>'
    + '</div>'
    + '<div class="nav col-lg-4">'
        + '<button type="button" class="btn rounded-0 button3" onclick="clickButtonMenu(this.innerHTML)">Contact</button>'
    + '</div>'

    if (mediaQuery(null, 991)) {
        document.querySelector('.home .buttonNav').innerHTML = html
    } else {
        html = ''
        + '<div class="nav col-lg-4">'
            + '<button type="button" class="btn rounded-0 button1" onclick="clickButtonMenu(this.innerHTML)">Portfolio</button>'
        + '</div>'
        + '<div class="nav col-lg-4">'
            + '<button type="button" class="btn rounded-0 button2" onclick="clickButtonMenu(this.innerHTML)">About Me</button>'
        + '</div>'
        + '<div class="nav col-lg-4">'
            + '<button type="button" class="btn rounded-0 button3" onclick="clickButtonMenu(this.innerHTML)">Contact</button>'
        + '</div>'

        document.querySelector('.home .buttonNav').innerHTML = html
    }
}

function addProject(number, name, description, language, linkProject, date) {
    let listProject = document.querySelector('.portfolio .listProject')

    let html = ''
    + '<div class="col-lg-4 boxProject">'
        + '<div class="number">'
            + '<h1>{0}</h1>'.format(number)
        + '</div>'
        + '<div class="project">'
            + '<h1>{0}</h1>'.format(name)
            + '<h2 class="descriptionProject">{0}</h2>'.format(description)
            + '<h3>Language: <span class="language">{0}</span></h3>'.format(language)
            + '<h4>{0}</h4>'.format(date)
        + '</div>'
        + '<div class="project1">'
            + '<h1 onclick="window.location.href = \'{0}\'">Open Project</h1>'.format(linkProject)
        + '</div>'
    + '</div>'

    listProject.innerHTML += html
}

function clickNav(text) {
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

function clickButtonMenu(text) {
    clickNav(text)
}

function getRepositoryGithub() {
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
                    url: '{0}'.format(repository['commits_url'].replace('{/sha}', '')),
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

function mediaQuery(min = null, max = null) {
    let query

    if (max == null && min != null) {
        query = window.matchMedia("(min-width: {0}px)".format(min))
    } else if (min == null && max != null) {
        query = window.matchMedia("(max-width: {0}px)".format(max))
    } else if (min != null && max != null) {
        query = window.matchMedia("(min-width: {0}px) and (max-width: {1}px)".format(min, max))
    }

    return query.matches
}