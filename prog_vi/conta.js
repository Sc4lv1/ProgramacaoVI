export class Conta {
  constructor(pessoa) {
    this.pessoa = pessoa;
    this.saldo = 0;
    this.historico = [];
  }
  depositar(valor) {
    if (valor <= 0) {
      throw "Impossível Depositar";
    } else {
      this.saldo += valor;
    }
    this.historico.push("Depositar: + R$" + valor.toFixed(2));
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente para sacar";
    }

    this.saldo -= valor;
    this.historico.push("Sacar: - R$" + valor.toFixed(2));
  }

  transferir(outraConta, valor) {
    if (valor > this.saldo) {
      throw "Saldo Insuficiente para transferir";
    } else {
      this.sacar(valor);
      outraConta.depositar(valor);
      

      this.historico[this.historico.length - 1] = "Transferencia enviar de " + outraConta.pessoa.nome +": - R$ " + valor.toFixed(2);

      outraConta.historico[this.historico.length - 1] = "Transferencia receida de " + this.pessoa.nome + ": +R$ " + valor.toFixed(2);
    }
  }

  exibirSaldo(){
    console.log(this.pessoa.nome +" - Saldo: R$"+this.saldo);
  }

  exibirHistórico(){
    console.log(" --- Histórico de "+this.pessoa.nome + " --- ")
    if(this.historico.length ===0){
      console.log(" Nenhuma operação realizada");
    }else{
      for(let operacao in this.historico){
        console.log(" "+this.historico[operacao]);
      }
    }
    console.log(" Saldo Atual: R$"+this.saldo.toFixed(2));
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
