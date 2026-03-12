import { Pessoa} from "./pessoa.js"
import { Produto } from "./produto.js"
import { Carrinho } from "./carrinho.js"


let pessoa1 = new Pessoa("Vicenzo Scalvi" , 17, "49 99944-3252");
let pessoa2 = new Pessoa("chaves" , 8, "49 99999-9999");

let produto1 = new Produto("Maça", 7, 20);
let produto2 = new Produto("Chocolate", 15, 25);
let produto3 = new Produto("Tablet", 1500, 2);

let carrinho1 = new Carrinho(pessoa1);
let carrinho2 = new Carrinho(pessoa2);


carrinho1.addProduto(produto3);
carrinho1.addProduto(produto3);


carrinho2.addProduto(produto1);
carrinho2.addProduto(produto2);

carrinho1.exibirResumo();
carrinho2.exibirResumo();

carrinho1.filtrarProduto(0,50);


const [nomeCliente, produtoNome ] = [carrinho1.cliente.nome, produto2.nome]
console.log("\n"+nomeCliente)
console.log("\n"+produtoNome)

