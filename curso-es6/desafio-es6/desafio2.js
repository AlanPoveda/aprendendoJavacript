const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];


  //Variável somente com a idade

  const idades = usuarios.map((item)=>{
        return item.idade;
  })

  console.log(idades)

  //Filter somente usuario que trabalha na Roketseat

  const empresa = usuarios.filter((item)=>{
      return item.empresa == 'Rocketseat';
  })

  console.log(empresa)

  //Agora procurar alguém que trabalha na empresa Google. que neste caso não existe

  const naoexiste = usuarios.find((item)=>{
      return item.empresa == "Google";
  })

  console.log(naoexiste)

  //Multiplique todas as idades e faça retornar somente as pessoas que são menores que 50 anos 

  const idadesVezes2 = usuarios
    .map(usuario => ({ ...usuario ,idade: usuario.idade*2 })) //Assim multiplica e substitui a idade das pessoas dentro do objeto
    .filter(usuario => usuario.idade < 50);// Aqui vai retornar somente as pessoas que estão com menor do que 50 anos 




  console.log(idadesVezes2)
