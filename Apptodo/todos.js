// Declarando as variáveis que irei usar no Aplicativo
var buttonElement = document.querySelector('#app button');
var inputElement= document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

// Implementando valores que serão guardados no cash, fazer de conta que e um banco de dados    
// JSON transforma os itens gravados em uma Array novamente para mostrar no <li> JSON.parse
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Renderizando na tela


function renderTodos(){
    // Apagar os itens ja colocados na Array
    listElement.innerHTML = ''; //Tudo que estiver na <ul> vai retornar vazio
    //Percorrre os Todo
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Adicionando link de exclusão dos aquivvos
        var linkElement = document.createElement('a');

        //Atributo ao link para aparecer que realmente é um link
        linkElement.setAttribute('href', '#');

        // aqui ele percorre a Array e vai e indicar a posição dela
        var pos = todos.indexOf(todo);

        // Segunda parte, passa dentro de uma function, contatenando, a posição que será excluida 
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')'); 
        var linkText = document.createTextNode('Excluir');

        //TO link tem que ter um texto, aqui é adicionado
        linkElement.appendChild(linkText);
        //O elemento, é um texto, então precisa adicionar
        todoElement.appendChild(todoText);
        //Todo elemento, precisa de um link para excluir aqui adiciona
        todoElement.appendChild(linkElement);
        //Aqui é para adicionar o elemento na lista
        listElement.appendChild(todoElement);
        
      

    }
}

renderTodos();

function addTodo(){
    // Pegar informação do todo
    var todoText = inputElement.value;

    // Adicionar na Array
    todos.push(todoText);

    // deixar vazio novamente
    inputElement.value = '';

    // Renderizar os todos
    renderTodos();
    saveToStorage(); // Salvando no cash do chrome essa informação
}

// Para adicionar um novo todo

buttonElement.onclick = addTodo; // regran nao pode retornar assim addTodo()

// Funcao para excluir o todo

function deleteTodo(pos){ 
    // Esse pos é a posição da array que ele vai receber para excluir
    todos.splice(pos, 1);//SPLICE é uma função de excluir. Também o pos 1. vai excluir o proximo item da lista
    renderTodos(); //Renderizar 
    saveToStorage(); //Salvando no cahs do Chrome
}

// Salvando no Storage do navegador, os Todo, ou tirando os todo

function saveToStorage(){
    // Aqui usou uma global que salva no Storage, e ainda setar, armazenar um item 
    //JSON stringfy transforma o vetores em String.
    localStorage.setItem('list_todos', JSON.stringify(todos)); //Local storage NÃO SALVA VETORES, NÚMEROS, OBJETOS, SOMENTE STRINGS
}