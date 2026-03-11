/*
Exercicio 06>: Produto e carrinho]
Crie a classe produto com os atributos: nome, preço e estoque

Depois, cri a classe carrinho que tenha:
- um atributo cliente(objeto do tipo pessoa)
- um atributo itens(array de objetos do tipo Produto)

Implemente os métodos
- addProduto(produto) =  add produto ao array iten
- calcularTotal() = add o try catch
- exibirResumo() 

No programa principal
- crie pelo menos 2 obejtos pessoa como cliente
- crie pelo menos 3 obejetos produto
- Monte um carrinho para cad cliente com produtos diferentes
- Exiba o resumo de cada carrinho
*/
import { Pessoa } from "./pessoa.js";
import { Produto } from "./produto.js";
import { Carrinho } from "./carrinho.js";

let cliente1 = new Pessoa("vitienzo", 17, "49 99944 - 3252")
let cliente2 = new Pessoa("chaves", 8, "49 99999 - 9999")

let produto1 = new Produto("Chocolate", 10.00,  11);
let produto2 = new Produto("Salgadinho", 15.00, 5);
let produto3 = new Produto("Refrigerante", 5.00, 10);

let carrinhoPessoa1 = new Carrinho(cliente1);
let carrinhoPessoa2 = new Carrinho(cliente2);

carrinhoPessoa1.addProduto(produto3);
carrinhoPessoa1.addProduto(produto1);
carrinhoPessoa2.addProduto(produto2);
carrinhoPessoa2.addProduto(produto1);

carrinhoPessoa1.exebirResumo();
carrinhoPessoa2.exebirResumo();




