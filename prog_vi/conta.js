export class Conta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }
  depositar(valor) {
    if (valor <= 0) {
      throw "Impossível Depositar";
    } else {
      this.saldo += valor;
    }
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente para sacar";
    }

    this.saldo -= valor;
  }

  transferir(outraConta, valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente para transferir";
    } else {
      this.sacar(valor);
      outraConta.depositar(valor);
    }
  }
}

/*


let conta1 = new conta("Vicenzo Scalvi");
let conta2 = new conta("Pamela Stieven");

function MostraSaldo(saldo){
    console.log(" ")
    console.log("----Saldos----- ")
    console.log(conta1.titular+ " - R$ "+ conta1.saldo)
    console.log(conta2.titular+ " - R$ "+ conta2.saldo)
    console.log(" ")

}

try{

   conta1.depositar(2000);
    conta2.depositar(3000);

}catch(error){
    console.error("Error: "+ error);
}



MostraSaldo();

try{

    conta1.sacar(1900);
    conta2.sacar(1000);

}catch(error){
    console.error("Error: "+ error);
}

MostraSaldo();

try{
conta2.transferir(conta1,500);
}catch(error){console.error("Error: "+ error)}

MostraSaldo();






*/
