//gere um vetor de preços e imprimira esse preços com a função map.



//exe 01
/*
var precos = [100, 200, 300]


var  precoNovo = precos.map((item)=> (item *0.10)+item)

for (let i in precoNovo){
    console.log("Preço: "+precoNovo[i]);
}
*/


//exe 02
let notas = [
    {nome: "Vicenzo Scalvi", nota: 10},
    {nome: "Chaves", nota: 8},
    {nome: "Chiquinha ", nota: 6},
    {nome: "Seu Madruga ", nota: 2},
    {nome: "Kiko", nota: 0},
];

let ap = notas.filter(function(item) {
    return item.nota >=6;

})

ap.map(function(item){
    console.log("\nNome:  "+item.nome + " - "+ item.nota);
})