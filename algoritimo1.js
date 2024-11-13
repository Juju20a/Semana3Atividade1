const numeros = [1, 2, 3, 4, 5]; // Criação de um array com números de 1 a 5.

function calcularDobro(numero) { // Declaração de uma função 'calcularDobro' que recebe um parâmetro 'numero'.

return numero * 2; // Retorna o dobro do número passado como parâmetro.

}

const numerosDobro = numeros.map(calcularDobro); // Aplica a função criada anteriormente

//'calcularDobro' a cada elemento do array 'numeros', criando um novo array 'numerosDobro' com os valores multiplicados por 2.

console.log(numerosDobro); // Exibe no console o array 'numerosDobro'.
