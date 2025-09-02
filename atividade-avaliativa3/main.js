// import Funcionario from "./funcionario.js"
import Especialidade from "./especialidade.js"
import Medico from "./medico.js"
import Secretaria from "./secretaria.js"

// Teste de classe abstrata
// let funcionario = new Funcionario("Alfredinho", 123456, 1650)

let medico1 = new Medico("Alfredinho", "123456", 3500, "12356-DF")
let medico2 = new Medico("Augusto", "89795", 5000, "20000-DF")

let secretaria1 = new Secretaria("Ana", 1, 2000, "Ramal")
let secretaria2 = new Secretaria("Banana", 2, 3000, "Ramal")

// Teste de herança e Encapsulamento

console.log(medico1.salario) // Getter
console.log(secretaria1.salario)

medico1.salario = 5000 // Setter
secretaria1.salario = 2400 // Setter

console.log(medico1.salario) // Getter
console.log(secretaria1.salario) // Getter

// Teste de Polimorfismo

let array = [medico1, secretaria1, medico2, secretaria2]

for (let pessoa of array) {
    pessoa.descreverFuncao()
}

// Teste de agregação

let cardiologista = new Especialidade("Cardiologista", "123456", "Mexe com coração")
let pediatra = new Especialidade("Pediatra", "465213", "Cuida de criança")

medico1.adicionarEspecialidade(cardiologista)
medico1.adicionarEspecialidade(pediatra)

medico2.adicionarEspecialidade(pediatra)

console.log(medico1)
console.log(medico2)

// Teste de composição

secretaria1.criarAgendamento("12/12/2025", "Consulta com cardiologista", "Fulano de tal")
secretaria1.criarAgendamento("10/2025", "Consulta com pediatra", "Fulano de tal")

console.log(secretaria1)

secretaria1.detalharAgendamentos()