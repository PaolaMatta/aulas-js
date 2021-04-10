// 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

/**
 * o próximo número é igual a soma dos dois números anteriores a ele.
 * n = n[p-1] + n[p-2]
 */
// 1)
// const numero = 13;

// let auxiliar1 = 1;
// let auxiliar2 = 1;
// let atual = auxiliar1 + auxiliar2;

// if (numero === 1) {
//   console.log(`O número 1 pertence à sequencia de fibonacci!`);
// } else if (numero < 1) {
//   console.log(`Os números da sequência de fibonacci começam a partir de 1!`);
// } else {
//   let pertence = false;
//   while(atual <= numero) {
//     console.log(`O número atual da sequência é: ${atual}`);
//     if (atual === numero) {
//       pertence = true;
//     }
//     auxiliar1 = auxiliar2;
//     auxiliar2 = atual;
//     atual = auxiliar1 + auxiliar2;
//   }
//   if (pertence === true) {
//     console.log(`O número ${numero} pertence à sequencia de fibonacci!`);
//   } else {
//     console.log(`O número ${numero} não pertence à sequencia de fibonacci!`);
//   }
// }


// 2)
// const numero = 12;

// let auxiliar1 = 1;
// let auxiliar2 = 1;
// let atual = auxiliar1 + auxiliar2;

// if (numero === 1) {
//   console.log(`O número 1 pertence à sequencia de fibonacci!`);
// } else if (numero < 1) {
//   console.log(`Os números da sequência de fibonacci começam a partir de 1!`);
// } else {
//   while(atual <= numero) {
//     console.log(`O número atual da sequência é: ${atual}`);
//     if (atual === numero) {
//       console.log(`O número ${numero} pertence à sequencia de fibonacci!`);
//       break;
//     } else {
//       auxiliar1 = auxiliar2;
//       auxiliar2 = atual;
//       atual = auxiliar1 + auxiliar2;
//     }
//   }

//   if (atual !== numero) {
//     console.log(`O número ${numero} não pertence à sequencia de fibonacci!`);
//   }
// }
