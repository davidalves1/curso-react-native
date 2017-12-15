/*
Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário.
Considere os seguintes critérios:
- Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”
- Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”
- Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”
- Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”

Fique à vontade para utilizar qualquer uma das funções aprendidas
para exibição de dados para o usuário.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a sua idade? ', (idade) => {
  idade = idade.replace(/\D/g, '') || 0;

  if (0 > idade || idade == '') {
    alert('Idade inválida');
    return;
  }

  let tipo;

  if (idade >= 60) {
    tipo = 'um Idoso';
  } else if (idade >= 30) {
    tipo = 'um Adulto';
  } else if (idade >= 15) {
    tipo = 'um Jovem';
  } else {
    tipo = 'uma Criança';
  }

  console.log(`Pela idade você é ${tipo}`);
  rl.close();
});