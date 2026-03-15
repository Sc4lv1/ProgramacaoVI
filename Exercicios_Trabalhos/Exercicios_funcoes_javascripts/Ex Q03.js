// Ainda não aprendemos a pedir para o usuário digitar um valor. Então, criei um array com as notas para exemplificar o exercício.
function mostraPares(valor){
    return valor % 2 === 0;
}

var valores = [100, 105, 110, 115];
var pares = valores.filter(mostraPares);

console.log("Os números pares são: ");
for(var i = 0; i<pares.length; i++){
console.log("\t" + pares[i]);
}







