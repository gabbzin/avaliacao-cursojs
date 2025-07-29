// 1. Cálculo de Desconto Progressivo

let valorCompra = 500;

if (valorCompra >= 1000){
    valorCompra *= 0.80;
} else if (500 <= valorCompra){
    valorCompra *= 0.90;
}

console.log(`Valor final: R$ ${valorCompra}`);

// 2. Sistema de Pontos de Fidelidade

let categoria = "Ouro";

switch (categoria) {
    case "Ouro":
        console.log("Você ganha 20 pontos");
        break;

    case "Prata":
        console.log("Você ganha 15 pontos");
        break;

    case "Bronze":
        console.log("Você ganha 10 pontos");
        break;

    default:
        console.log("Categoria inválida")
        break;
}

// 3. Sequência de Fibonacci

let primeiroNumero = 0;
let segundoNumero = 1;
let terceiroNumero;

for (let i = 0; i < 10; i++){
    if (i == 0){
        console.log(primeiroNumero);
    } else if (i == 1){
        console.log(segundoNumero);
    } else {
        terceiroNumero = primeiroNumero + segundoNumero;
        console.log(terceiroNumero);

        primeiroNumero = segundoNumero; // Essa variável recebe o valor do seu sucessor
        segundoNumero = terceiroNumero; // Essa variável recebe o valor do sucessor (a que foi somada)
    }
}

// 4. Simulador de Bateria

let nivelBateria = 100;

while (nivelBateria > 0){

    console.log(`Bateria em ${nivelBateria}`);

    nivelBateria -= 10;
}

console.log("Bateria esgotada");


// 5. Função para Calcular os Dias de Vida

function calcularDiasDeVida(idadeEmAnos){
    let idadeEmDias = idadeEmAnos * 365;

    return idadeEmDias;
}

let idade = 30

console.log(`A pessoa de ${idade} viveu aproximadamente ${calcularDiasDeVida(idade)}`);

// 6. Verificador de aprovação escolar

let primeiraNota = 7;
let segundaNota = 8;
let terceiraNota = 6;
let quartaNota = 10;

let frequencia = 85;

const mediaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

if (mediaFinal >= 6 && frequencia >= 75){
    console.log(`Aprovado. \nMédia Final: ${mediaFinal} --- Frequência: ${frequencia}`)
} else {
    console.log("Reprovado")
}

// 7. Menor Número da lista
let listaDeNumeros = [42, 7, 91, 3, 55, 12, 88, 29, 64, 18];
let maior = Number.MIN_VALUE;

for (numero of listaDeNumeros){
    if (numero > maior){
        maior = numero;
    }
}

console.log(`O maior número da lista é o ${maior}`);