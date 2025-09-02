export default class Especialidade {
    constructor(nome, codigo, descricao){
        this.nome = nome
        this.codigo = codigo
        this.descricao = descricao
    }

    obterDetalhes(){
        console.log(`Especialidade ${this.nome}, código ${this.codigo}.\nDescrição: ${this.descricao}`)
    }
}