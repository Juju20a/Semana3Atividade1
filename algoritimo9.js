let students = [ // Criação de um array de objetos 'students', com propriedades 'name' e 'average'.

{ name: "Smith", average: 80 },

{ name: "Jenny", average: 69 },

{ name: "John", average: 35 },

{ name: "Tiger", average: 55 }

];


const output = students.map((student) => {

if (student.average < 60) { // Correção: verificamos se a média é menor que 60.


student.average += 20; // Aumenta a média em 20 para alunos com média abaixo de 60.


}

return student; // Retorna o objeto 'student' com a média ajustada, se necessário.

}).filter((student) => student.average > 60); // Filtra para manter apenas alunos com média superior a 60.


console.log(output); // Exibe no console os alunos cujas médias, após o ajuste, são superiores a 60.
