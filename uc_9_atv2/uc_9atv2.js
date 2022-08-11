class Pessoa{
    constructor(pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }

    get Nome() { return this.nome};
    set Nome(pNome){ this.nome = pNome};

    get Endereco() { return this.endereco};
    set Endereco(pEndereco){ this.endereco = pEndereco};

    toString(){
        return "Nome: "+this.nome + "\nEndereco: " + this.endereco;
    }

}

class Fisica extends Pessoa{
    constructor(pNome, pEndereco, pCpf, pData){
      super(pNome,pEndereco);
        this.Cpf = pCpf;
        this.Data = pData;
    }

    get Cpf() { return this.Cpf};
    set Cpf(pCpf){ this.cpf = pCpf};

    get Data() { return this.data};
    set Data(pData){ this.data = pData};

    toString(){
        let retorno = super.toString();
        retorno = retorno + '\nCpf: ${this.cpf} \nNascimento: ${this.data}';
        return retorno;
    }
}

class Juridica extends Pessoa{
    constructor(pNome, pEndereco, pCnpj, pSocial){
      super(pNome,pEndereco);
        this.Cnpj = pCnpj;
        this.Social = pSocial;
    }

    get Cnpj() { return this.Cnpj};
    set Cnpj(pCnpj){ this.cnpj = pCnpj};

    get Social() { return this.social};
    set Social(pSocial){ this.social = pSocial};

    toString(){
        let retorno = super.toString();
        retorno = retorno + '\nCnpj: ${this.cnpj} \nRazao Social: ${this.social}';
        return retorno;
    }
}

//var pessoa = new Pessoa("Fernando", "Brasil");
//console.log(pessoa.toString());

//var fisica = new Fisica("Paula", "Santa Catarina", "11111111", "11/08/2022");
//console.log(fisica.toString());

var fjuridica = new Juridica("Mimi", "Chapeco", "123456", "fofurice");
console.log(fisica.toString());
