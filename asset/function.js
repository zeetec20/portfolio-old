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
    if (text == 'Home') {
        window.scrollTo({top: 0, behavior: 'smooth'})
    } else if (text == 'About Me') {
        window.scrollTo({top: 637, behavior: 'smooth'})
    } else if (text == 'Portfolio') {
        window.scrollTo({top: 1274, behavior: 'smooth'})
    } else if (text == 'About Me') {
        window.scrollTo({top: 637, behavior: 'smooth'})
    } else if (text == 'Contact') {
        window.scrollTo({top: 1911, behavior: 'smooth'})
    }
}

function clickButtonMenu(text) {
    if (text == 'Portfolio') {
        window.scrollTo({top: 1274, behavior: 'smooth'})
    } else if (text == 'About Me') {
        window.scrollTo({top: 637, behavior: 'smooth'})
    } else if (text == 'Contact') {
        window.scrollTo({top: 1911, behavior: 'smooth'})
    }
}

function getRepositoryGithub(params) {
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