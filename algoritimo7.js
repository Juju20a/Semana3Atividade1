//A correção foi feita apenas nos dois pontos (:) que ficam depois de nomes. Tinha sinal de dois ponto à mais.
let estudantes = [ // Criação de um array de objetos 'estudantes', cada um com 'nome' e 'idade'.

{ nome: "João", idade: 15 },

{ nome: "Maria", idade: 20 },

{ nome: "Felipe", idade: 22 },

{ nome: "Pedro", idade: 12 },

{ nome: "Joana", idade: 18 },

];

const details = estudantes.filter((x) => x.idade >= 18); // Filtra os estudantes com idade maior ou igual a 18.

console.log(details.length); // Exibe no console a quantidade de estudantes com 18 ou mais anos. A saída será 3.
