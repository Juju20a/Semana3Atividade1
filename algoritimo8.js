const users = [ // Criação de um array de objetos 'users'.

{ firstName: "john", lastName: "colben", age: 26 },
{ firstName: "jimmy", lastName: "fred", age: 75 },
{ firstName: "sam", lastName: "boston", age: 50 },
{ firstName: "ronald", lastName: "bristh", age: 26 },

];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName); // Filtra usuários com idade abaixo de 30, e mapeia para um array com seus primeiros nomes.

console.log(output); // Exibe o array de primeiros nomes dos usuários que têm menos de 30 anos. Resultado esperado: ["john", "ronald"].
