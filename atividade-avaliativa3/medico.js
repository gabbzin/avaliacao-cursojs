import Funcionario from "./funcionario.js"

export default class Medico extends Funcionario {
    constructor(nome, idFuncional, salario, crm){
        super(nome, idFuncional, salario)
        this.crm = crm
        this.especialidades = []
    }

    descreverFuncao(){
        console.log("Eu sou um médico!")
    }

    adicionarEspecialidade(especialidade){
        this.especialidades.push(especialidade)
    }
}