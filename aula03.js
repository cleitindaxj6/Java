//Alguns erros comuns

//const numero; 1 erro: Não declarar uma constante;


const minhaVar ='oi' // 2 Erro: Não declarar uma variavel e chamar no codigo;
console.log(minhaVar); // exemplo, chamar minhavar com V minusculo;

console.error("Isso esta errado") // 3 "Erro": Voce pode declarar

// Condicional avrevida if(){}

let idadeMinima = 18;
let idadeCliete = 17;

if(idadeCliente >= idadeMinha){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// modo ternario, utilizando a estrutura ________>=____?___:__
// modo ternario, utilizando a estrutura ________>=____?___:__
// modo ternario, utilizando a estrutura ________>=____?___:__

//Template string

const nome = "Carlos"
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é" + nome +" + idade + 