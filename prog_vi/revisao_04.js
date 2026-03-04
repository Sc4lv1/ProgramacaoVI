import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";



try {
  pessoa1.VerificaIdade();
  pessoa2.VerificaIdade();
} catch (error) {
  console.log(error);
}
let pessoa1 = new Pessoa("Vicenzo Scalvi");
let pessoa2 = new Pessoa("Pamela Stieven");
let conta1 = new Conta("Vicenzo Scalvi");
let conta2 = new Conta("Pamela Stieven");

function MostraSaldo(saldo) {
  console.log(" ");
  console.log("----Saldos----- ");
  console.log(conta1.titular + " - R$ " + conta1.saldo);
  console.log(conta2.titular + " - R$ " + conta2.saldo);
  console.log(" ");
}

try {
  conta1.depositar(2000);
  conta2.depositar(3000);
} catch (error) {
  console.error("Error: " + error);
}

MostraSaldo();

try {
  conta1.sacar(1900);
  conta2.sacar(1000);
} catch (error) {
  console.error("Error: " + error);
}

MostraSaldo();

try {
  conta2.transferir(conta1, 500);
} catch (error) {
  console.error("Error: " + error);
}

MostraSaldo();
