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

import { Produto } from "./produto.js";
import { Carrinho } from "./carrinho.js";

let produto1 = new Produto("Chocolate", 10.00,  10);
let produto2 = new Produto("Salgadinho", 12.00, 5);
let carrinho1 = new Carrinho("Vicenzo");
let carrinho2 = new Carrinho("Pamela");





