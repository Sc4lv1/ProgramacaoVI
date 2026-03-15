// Ainda não aprendemos a pedir para o usuário digitar um valor. Então, criei um array com as notas para exemplificar o exercício.
function VerificarIdade(elem) {
    return elem.idade >= 60;
}

let pessoas = [
    { nome: "Vicenzo Scalvi", idade: 17},
    { nome: "jackson Five", idade: 38},
    { nome: "Seu Barriga", idade: 60},
    { nome: "Seu Madruga", idade: 65}
]
console.log("Pessoas com idade maior de 60 anos:");
var idosos = pessoas.filter(VerificarIdade);

for( let i = 0; i <idosos.length;i++){
    console.log("\t" + idosos[i].nome);
}
