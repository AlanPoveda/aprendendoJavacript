/* Bibliotecas Ajax para fazer as nossas requisições assincronas, assim facilitando a nossa vida,
o interessante também e que mesmo não carregando a aquisição o código não irá dar erro, ele vai continuar
funcionando, não importa o tempo que irá demorar*/

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/AlanPoveda');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 ){
                if (xhr.status === 200){ //Status de conexão do servidor, ver em Element Network
                    resolve(JASON.parse(xhr.responseText));
                }else{
                    reject('Não foi possível conectar')
                }
            }
        }
    });
}

var resultado = minhaPromise()
    .then(function(response){ // .then é como se usa para aparecer a requisição
        console.log(response);
    })
    .catch(function(error){// .catch é para mostrar o erro que esta ocorrendo
        console.warn(error); // console.warm é para mostrar um aviso
    });