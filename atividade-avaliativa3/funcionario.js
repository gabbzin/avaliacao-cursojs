export default class Funcionario {

    #salario

    constructor(nome, idFuncional, salario) {

        if (this.constructor === Funcionario){
            throw new Error("Classe abstrata não pode ser instanciada")
        }
        this.nome = nome
        this.idFuncional = idFuncional
        this.#salario = salario
    }

    get salario(){
        return this.#salario
    }

    set salario(novoSalario){
        this.#salario = novoSalario
    }

    descreverFuncao(){
        throw new Error("Método abstrato, implemente ele na classe")
    }
}