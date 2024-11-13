const numbers = [1, 2, 3, 4, 5]; // Criação de um array de números.
const isOdd = (x) => x % 2 !== 0; // verifica se o número é ímpar.
const output = numbers.filter(isOdd); // Aqui o códico usa o filter para filtrar os números ímpares do array numbers

console.log(output); //Exibe no console o resultado da filtragem
