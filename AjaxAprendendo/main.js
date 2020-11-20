//Fazer requisição de recarregamento da página, sem precisar dar f5 na página

var xhr = new XMLHttpRequest();


xhr.open('GET', 'https://api.github.com/users/AlanPoveda'); //Aqui estou ja puxando as informações
xhr.send(null);

/*Demora para pegar a informação do servidor, é mais rápido do que o código, então é necessário
fazer este passo para ele esperar até toda e requisição de informação, estar pronta */

xhr.onreadystatechange =  function (){
    if(xhr.readyState == 4){ //o 4 é parâmetro das informações
        console.log(JSON.parse(xhr.responseText)); /*Como a informação é em JSON, é necessario essa function 
        para poder transformar esse valor em uma variável, ou algo do tipo para mostrar no HTML */
    } 
}

