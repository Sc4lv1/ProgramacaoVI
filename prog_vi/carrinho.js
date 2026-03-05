export class Carrinho{
    constructor(pessoa){
    this.cliente = pessoa;
    this.itens = [];
    }

    addProduto(produto){
        this.itens = itens + produto;
    }

    calcularTotal(){
        for(let i = 0; i<=this.itens.length();i++){


        }
    }

    exibirResumo(produto){
        this.itens.push("" + produto.toFixed(2));
        this.itens[this.itens.length - 1] = "Carrinho de" + carrinho.cliente.pessoa.nome +" - Itens: " + produto.toFixed(2);

        if(this.itens.length ===0){
      console.log("Nao ha itens no carrinho");
    }else{
      for(let i in this.itens){
        console.log(" "+this.itens[i]);
      }
    }
    }
    
}
