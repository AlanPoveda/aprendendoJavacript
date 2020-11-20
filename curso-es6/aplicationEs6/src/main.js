import api from './api'; // Import api


class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();

    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    //Botão de loading
    setLoading(loading = true){
        if (loading == true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode(' Caregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput === 0)
            return;

        this.setLoading()

        try {
            const response = await api.get(`/repos/${repoInput}`);

        //Destruturação do objeto que foi dado
        
            const { name , description, html_url, owner: { avatar_url }} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render(); 
        } catch (err){
            alert('Esse repositório não existe')
        }

        this.setLoading(false)
    }
    render(){
        //Apagar os elementos
        this.listEl.innerHTML = "";

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let repositoriesEl = document.createElement('a')
            repositoriesEl.setAttribute('target','_blank');
            repositoriesEl.setAttribute('href', repo.html_url);
            repositoriesEl.appendChild(document.createTextNode('Acessar Repositório'))

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(repositoriesEl);

            this.listEl.appendChild(listItemEl);


        });
    }

}

new App();