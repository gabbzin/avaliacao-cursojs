import Funcionario from "./funcionario.js"
import Agenda from "./agenda.js"

export default class Secretaria extends Funcionario {
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario)
        this.ramal = ramal
        this.agendamentos = []
    }

    descreverFuncao(){
        console.log("Eu sou secretaria!")
    }

    criarAgendamento(data, descricao, responsavel){
        if (!data || !descricao || !responsavel){
            throw new Error("Dados não informados")
        }

        let agenda = new Agenda(data, descricao, responsavel)

        this.agendamentos.push(agenda)
    }

    detalharAgendamentos(){ // Método de teste (Verificando se criou o objeto Agenda)
        for (let agendamento of this.agendamentos){
            console.log(agendamento.data)
            console.log(agendamento.descricao)
            console.log(agendamento.responsavel)
        }
    }
}