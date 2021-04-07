/*
// PRIMITIVOS
let numero = 10;
let string = "O Yuri é maravilhoso <3";
let boolean = false;
let float = 1.2341524;

let naoDefinido;
let nulo = null;

console.log(typeof numero);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof float);

console.log("-------------");
console.log(typeof naoDefinido);
console.log(typeof nulo);

// OBJETOS
let array = [];
console.log(typeof array);

let dicionario = {};
console.log(typeof dicionario);
*/

/**
 * CONVERSÕES EXPLÍCITAS
 */

// string -> String()
// number -> Number()
// boolean -> Boolean()

// array -> Array();
// object -> Object();

let nomeJoao = "João Falconi Sarti Souza ConsASDFADFgliere";
let objeto = Object(nomeJoao);
console.log(objeto);
nomeJoao = String(objeto);
console.log(nomeJoao);