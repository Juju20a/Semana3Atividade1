const users = [ // Criação de um array de objetos 'users', cada um com propriedades 'firstName', 'lastName' e 'age'.
{ firstName: "john", lastName: "colben", age: 26 },

{ firstName: "jimmy", lastName: "fred", age: 75 },

{ firstName: "sam", lastName: "boston", age: 50 },

{ firstName: "ronald", lastName: "bristh", age: 26 },

];
const output = users.map((x) => x.firstName + " " + x.lastName); // Cria um novo array concatenando 'firstName' e 'lastName' de cada usuário.
console.log(output); // Exibe o resultado no console. O array 'output' será: ["john colben", "jimmy fred", "sam boston", "ronald bristh"]
