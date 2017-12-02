/*
Crie um script que armazene as 26 letras do ${alfabeto português em }um array cuja
indexação deve iniciar pelo número 1. Posteriormente utilize a função document.write e o
recurso de concatenação para escrever a palavra “JAVASCRIPT” utilizando o array e os
índices correspondentes a cada letra
*/

let alfabeto = [];
alfabeto[1] = 'a';
alfabeto[2] = 'b';
alfabeto[3] = 'c';
alfabeto[4] = 'd';
alfabeto[5] = 'e';
alfabeto[6] = 'f';
alfabeto[7] = 'g';
alfabeto[8] = 'h';
alfabeto[9] = 'i';
alfabeto[10] = 'j';
alfabeto[11] = 'k';
alfabeto[12] = 'l';
alfabeto[13] = 'm';
alfabeto[14] = 'n';
alfabeto[15] = 'o';
alfabeto[16] = 'p';
alfabeto[17] = 'q';
alfabeto[18] = 'r';
alfabeto[19] = 's';
alfabeto[20] = 't';
alfabeto[21] = 'u';
alfabeto[22] = 'v';
alfabeto[23] = 'w';
alfabeto[24] = 'x';
alfabeto[25] = 'y';
alfabeto[26] = 'z';

console.log(`
  ${alfabeto[10]}
  ${alfabeto[1]}
  ${alfabeto[22]}
  ${alfabeto[1]}
  ${alfabeto[19]}
  ${alfabeto[3]}
  ${alfabeto[18]}
  ${alfabeto[9]}
  ${alfabeto[16]}
  ${alfabeto[20]}
`);

/*
Crie um array multidimensional contendo os índices “series” e “filmes”. Dentro do índice
“series” insira um array contendo índices sequenciais de 1 a 3 com os valores “Game of
Thrones”, “The Big Bang Theory” e “Friends” respectivamente. Dentro do índice “filmes”
insira um array contendo índices sequenciais de 1 a 3 com os valores “Star Wars”, “The Fast
and the Furious” e “The Lord of the Rings” respectivamente. Ao término, utilize a função
document.write para imprimir o valor contido no índice 2 do array “series” e o valor contido
no índice 3 do array “filmes”
*/

let catalogo = [];

catalogo['series'] = [];
catalogo['series'][1] = 'Game of Thrones';
catalogo['series'][2] = 'The Big Bang Theory';
catalogo['series'][3] = 'Friends';

catalogo['filmes'] = [];
catalogo['filmes'][1] = 'Star Wars';
catalogo['filmes'][2] = 'The Fast and the Furious';
catalogo['filmes'][3] = 'The Lord Of the Rings';

console.log(`Série: ${catalogo['series'][2]} / Filme: ${catalogo['filmes'][3]}`);

