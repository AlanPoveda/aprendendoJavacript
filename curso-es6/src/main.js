/* isto não existe, mas depois da instalação, do babel ele permite, mas por causa do babel, 
o bundle.js cria uma forma de ser executado no navegador

*/

//Exemplo de uma class para ser transformado 

const arr = [1,3,4,1,5,34,6]

const filter = arr.filter((item)=>{
    return item % 2 == 0;
});

console.log(filter);


const findItem = arr.find((item)=>{
    return item === 34
})

console.log(findItem);

// Arrow function bem reduzida, sendo que só pode se tiver um item somente e 
// um return simples

const minhaArray = arr.map( item => item *2 );

console.log(minhaArray);

const retornandoObjeto = () => ({ nome: "Alan Poveda" });

console.log(retornandoObjeto);

//Desestruturação 

const usuario = {
    nome: "Alan",
    idade: 25,
    endereco: {
        cidade:"São Paulo",
        estado: "Sp",
    },
};

// Forma comúm de desestruturação 

//const nome = usuario.nome;
//const cidade = usuario.endereco.cidade;

//Forma nova de desestruturação 

const { nome, idade, endereco: { cidade } } = usuario;

//outro exemplo

function mostrarNome({ nome }){
    console.log(nome);   
}

mostrarNome(usuario)

// Operadores rest e spread

const usuarionovo = {
    nome: 'Alan',
    idade: 25,
    empresa: 'Fped'
};

const { nome, ...resto } = usuario;

console.log(nome);
//O resto é uma nova variavel que pega o restante das informações 
console.log(resto);

// Colocar até em array o resto

const arr = [1,2,3,4,5];

const [ a,b,...c ] = arr;


console.log(a);
console.log(b);
// Aqui vai mostrar o restante das variáveis dentro da array
console.log(c);













