//gere um vetor de preços e imprimira esse preços com a função map.

var precos = [100, 200, 300]


var  precoNovo = precos.map((item)=> (item *0.10)+item)

for (let i in precoNovo){
    console.log("Preço: "+precoNovo[i]);
}


