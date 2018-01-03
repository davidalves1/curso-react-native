/*
1) Crie uma aplicação para consulta de tabuadas. Considere os seguintes critérios:
- Ao executar o script a aplicação deve solicitar a entrada do número da tabuada.
- A saída apresentada para o usuário deve ser um texto análogo ao exemplo abaixo:
  7 x 7 = 49
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a tabuada? ', (num) => {
  if (1 > num) {
    console.log('Número inválido');
    rl.close();
  }

  console.log(`Tabuada de ${num}:`);
  for (let i = 1; i <= 10; i++) {
    let res = num * i;
    console.log(`${num} x ${i} = ${res}`);
  }

  rl.close();
});