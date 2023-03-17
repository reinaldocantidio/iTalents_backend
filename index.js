class Usuario{
    constructor(nome, email, senha, tipo){
        this.nome = nome,
        this.email = email,
        this.senha - senha,
        this.tipo = tipo
    }

    infos = function(){
        return this.nome + " " + this.tipo;
    }
}

class Supervisor extends Usuario{
    constructor(nome, email, senha, tipo, chaveSup){
        super(
            nome,
            email,
            senha,
            tipo
        )
        this.chaveSup = chaveSup
    }
    infos = function(){
        return this.nome + " " + this.tipo + " "+ this.chaveSup;
    }

}

class Operador extends Usuario{
    constructor(nome, email, senha, tipo, chaveOper){
        super(
            nome,
            email,
            senha,
            tipo
        )
        this.chaveOper = chaveOper
    }
    infos = function(){
        return this.nome + " " + this.tipo + " "+ this.chaveOper;
    }

}


const supervisor = new Supervisor("Reinaldo", "reinaldo@email", "XRZ222", "S", 9999);

const operador = new Operador("Pedro", "pedro@email", "ZZZ555", "O", 5555);


console.log(supervisor);
console.log(operador);