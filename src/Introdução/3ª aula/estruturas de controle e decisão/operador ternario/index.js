const numero = 1001;

// if ( numero % 2 === 0 ) {
//   console.log("O número é par");
// } else {
//   console.log("O número é ímpar");
// }

// const mensagem = numero % 2 === 0 ? "O número é par" : "O número é ímpar";
// console.log(mensagem);

const mensagem2 = numero > 1000 ? 
                    "O número é maior que 1000" : numero > 100 ? 
                      "O número é maior que 100" : numero > 10 ?
                        "O número é maior que 10" : "O número é menor ou igual a 10";

console.log(mensagem2)