
export class Pessoa{
    constructor(nome){
    this.nome = nome ;
    this.idade = idade;
    this.telefone = telefone;
    }
    VerificaIdade() {    
        if(this.idade < 18){
            throw this.nome + "Pessoa menor de idade";
        }else{
            throw this. nome + "Pessoa de maior"
        }

    }
}
