const empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
    }
};

// Forma correta de pegar informações de um objeto

const {
    nome,
    endereco:{ cidade, estado }
} = empresa

console.log(nome)
console.log(cidade)
console.log(estado)

// apenas retorne return `${nome} tem ${idade} anos.`;

//function mostraInfo(usuario) {
  //  return `${usuario.nome} tem ${usuario.idade} anos.`;
//}

function mostrarInfo({ nome, idade }){
    return `${nome} tem ${idade} anos.`
}



mostrarInfo({ nome: 'Diego', idade: 23 })




