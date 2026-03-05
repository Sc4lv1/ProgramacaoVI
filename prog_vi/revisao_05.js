import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";

let pessoa1 = new Pessoa("Vicenzo Scalvi", 17,  1);
let pessoa2 = new Pessoa("Pamela Stieven", 18, 1);
let conta1 = new Conta(pessoa1);
let conta2 = new Conta(pessoa2);

/*try {
  pessoa1.VerificaIdade();
  pessoa2.VerificaIdade();
} catch (error) {
  console.log(error);
}
*/

try {
  conta1.depositar(5000);
  conta1.depositar(1500);

    conta2.depositar(3000);
} catch (error) {
  console.error("Error: " + error);
}


console.log("Inicio")
console.log(conta1.pessoa.nome + " - R$ " + conta1.saldo);
console.log(conta2.pessoa.nome+ " - R$ " + conta2.saldo);


try {
  conta1.sacar(1900);
  conta2.sacar(1000);
} catch (error) {
  console.error("Error: " + error);
}

try {
  conta2.sacar(9999);
} catch (error) {
  console.error("Error: " + error);
}


try {
  conta1.transferir(conta2, 1200);
} catch (error) {
  console.error("Error: " + error);
}

console.log("=== Extrato Final ===")
conta1. exibirHistórico();
console.log("-----------------")
conta2.exibirHistórico();

