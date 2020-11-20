//Converta as funções nos seguintes trechos de código em Arrow Functions:

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});

// transformando em arrow functions


const newArr = arr.map(item => item+10)

console.log(newArr)

// transformando em arrow function 
const usuario = { nome: 'Diego', idade: 23 };
  //  function mostraIdade(usuario) {
  //  return usuario.idade;
  //  }

//mostraIdade(usuario);


const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario))

//transformando em arrow function 

const nome = "Diego";
const idade = 23;

//function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
//}

//mostraUsuario(nome, idade);
//mostraUsuario(nome);


const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome , idade })

console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))


// Transformando em uma arrow function 

const promise = function() {
    return new Promise(function(resolve, reject) {
      return resolve();
    })
  }



const promise = () => new Promise((resolve, reject)=> resolve());








