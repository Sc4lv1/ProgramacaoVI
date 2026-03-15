// Ainda não aprendemos a pedir para o usuário digitar um valor. Então, criei um array com as notas para exemplificar o exercício.
let notas = [10, 8, 7, 6, 5];

var media = notas.reduce((prevVal, elem) => prevVal + elem, 0) / notas.length;

console.log("A média das notas é: " + media);