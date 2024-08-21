//,Var -> Criando uma variável

// var altura = 5;
// var comprimento = 8;

// var area = altura * comprimento;
// console.log(area);

// let -> Cria uma variável ( forma mais atualizada de criar uma var)

const altura =5;
const comprimento = 8;
const forma = "retangulo"
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else if (forma === 'triangulo') {
    area = (altura * comprimento) / 2;
} else {
    console.log("Deveria ser uma forma");
    area = null; 
}

console.log(area);

// const -> Utilizada para criar "variáveis" que são fixas, que não se altera 
// Condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false); // True
console.log(contaPaga == 0) // True
console.log(contaPaga === 0); // False
console.log("" == false); // True
console.log(1 == true); // True

// Nulo e indefinido
// nulo -> Vazio ou nada 

let carlos;
let guilherme = null;
let numero = 3;
let texto = "Eu gosto de programação <3 "

// Consultando os tipos de variáveis;

console.log(typeof carlos);
console.log(typeof guilherme);
console.log(typeof numero);
console.log(typeof texto);

// Coversão de variável

const numeroNumber = 390;
const numeroString = "390"

console.log(numeroNumber == numeroString); // compra apenas o valor
console.log(numeroNumber === numeroString) // compara também o tipo
console.log(numeroNumber + numeroString) // concatenção
console.log(numeroNumber + Number (numeroString))