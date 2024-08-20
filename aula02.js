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

if(forma=== 'retangulo'){
    area = altura * comprimento
}else{
    area = (altura * comprimento) / 2
}
console.log(area)

// const -> Utilizada para criar "variáveis" que são fixas, que não se altera 
// Condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false);
console.log(contaPaga == 0)
console.log(contaPaga === 0)

// continua slide 13..

