// EXEMPLO DE DECLARAÇÃO DE FUNÇÃO:

// function somaNumeros() {
//   const numero1 = 15;
//   const numero2 = 100;
//   const resultado = numero1 + numero2;
//   console.log(resultado);
// }
// somaNumeros(); // Chamando (invocando) a função somaNumeros()


// let numero1 = 10;       // declaração de numero1 fora do escopo da função somaNumeros();
//                         // Isso não gera erro pois os escopos são diferentes.

// function somaNumeros() {
//   console.log(numero1); // Ao tentar imprimir numero1 declarado no escopo externo à função,
//                         // um erro é gerado porque o interpretador encontra uma declaração de variável
//                         // com o mesmo nome no mesmo escopo.
//   const numero1 = 15;
//   const numero2 = 100;
//   const resultado = numero1 + numero2;
//   return resultado;
// }

// numero1 = somaNumeros();
// console.log(numero1);


// let numero1 = 10;

// function somaNumeros() {
//   console.log(numero1); // Entretanto, ao utilizarmos a declaração VAR ao invéz de CONST, notamos
//                         // que nenhum erro é gerado e o console.log(numero1) imprime undefined;
//   var numero1 = 15;
//   const numero2 = 100;
//   const resultado = numero1 + numero2;
//   return resultado;
// }

// numero1 = somaNumeros();
// console.log(numero1);


/**
 * HOISTING:
 */

// const resultado = somaNumeros();
// console.log(resultado);

// function somaNumeros() {
//   const numero1 = 10;
//   const numero2 = 20;
//   return numero1 + numero2;
// }

/**
 * O Hoisting é um recurso do interpretador do JS que, antes de executar o código, 
 * ELEVA as declarações de funções, classes e variáveis declaradas com VAR para o topo do
 * documento.
 */

// console.log(numero);
// var numero = 10;
// console.log(numero);

/**
 * No caso abaixo, percebemos que ao encontrar variáveis de mesmo nome em seu escopo, a função
 * divideNumeros opta por utilizá-las ao invés de utilizar as variáveis externas.
 * 
 * A lição que tiramos é: O escopo interno de uma função/estrutura acessa os valores declarados
 * no escopo externo à ela, entretanto, algo que é declarado no escopo interno de uma estrutura não
 * pode ser acessado pelo meio externo à ela.
 */

// let numero1 = 10;
// let numero2 = 20;

// function divideNumeros() {
//   let numero1 = 50;
//   let numero2 = 20;
//   let numero3 = 1000; // não está sendo usado no escopo interno, mas é proposital
//   return numero1 / numero2;
// }

// console.log(numero3); // gera um erro pois o escopo externo não pode acessar elementos declarados
//                       // no escopo interno.
// console.log(divideNumeros());


// let numero1 = 10;
// function divideNumeros() {
//   return numero1 / numero2;
// }

// console.log(numero2);
// console.log(divideNumeros());
// var numero2 = 40;
// console.log(numero2);


function imprimeTexto(texto, data) { // (texto, data) -> PARÂMETROS
  console.log(
`Data: ${data}
Mensagem: ${texto}`
  );
}
const msg = "O Bofete está roncando no meio da minha aula :@";
imprimeTexto(msg, new Date()); // na invocação, (msg, new Date()) são argumentos.
// Parâmetros e argumentos são posicionais, ou seja, msg será recebido pela função
// imprimeTexto pelo ALIAS (apelido) de texto, enquanto new Date() será recebido pelo ALIAS
// data;