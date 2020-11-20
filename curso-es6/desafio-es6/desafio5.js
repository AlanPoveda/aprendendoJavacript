const arr = [1, 2, 3, 4, 5, 6]

// faça uma variavel x recever o primeiro valor, e uma variável y que receba o restante

const [x, ...y] = arr

console.log(x)
console.log(y)


function soma(...num){
    return num.reduce((a,b)=>a+b)
}


console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
    }
  };


// Somente mudar o Nome do usuário e ter o resto
const usuario1 = {...usuario, nome: "Gabriel"};


// Mudando a cidade de Lontras e mantendo as outras informações

const usuario2 = {...usuario, endereco:{...usuario.endereco, cidade: "Lontras"} };

console.log(usuario1)
console.log(usuario2)


