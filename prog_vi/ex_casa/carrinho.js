export class Carrinho{
    constructor(cliente){
    this.cliente = cliente;
    this.itens = [];
    }

    addProduto(produto){
        this.itens.push(produto);
    }

    calcularTotal(){
      let total = 0;
        for(let i in this.itens){
          total+= this.itens[i];
          return total;
        }
    }

    exibirResumo(produto){
      console.log("Cliente: "+this.cliente.nome);
        console.log("Telefone: "+this.cliente.telefone);
        for(let i in this.itens){
          console.log(produto.nome + " - R$"+ produto.preco)
        }
        console.log("Total: R$"+ this.calcularTotal().toFixed(2))
      
      
    
    }
}