const input = prompt(); // Solicita ao usuário uma entrada via prompt, armazenada na variável 'input'.
const value = parseInt(input); // 'parserInt' não é uma função válida, então ela foi trocada por 'parseInt'.
const array = new Array(value).fill(null); // Agora 'value' é usado, que é o número convertido de 'input'.
let values = new Array(value).fill(null) // Preenche o array com 'null'.
.map((currentValue, index) => index + 1); // Atribui valores de 1 a 'value' ao array.

// Preenche o array com os números de 1 até 'input', usando o índice.
