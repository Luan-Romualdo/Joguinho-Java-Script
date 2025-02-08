const prompt = require('prompt-sync')();

let numero = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
let resposta = Number(prompt("Digite um número: ")); // Pede um número ao usuário
console.log(` Numero é ${numero}`)



while (resposta !== numero ) {

    if (resposta < numero) {
        console.log(` Numero é ${numero}`)
        console.log("Tente um número maior!");
    } else {
        console.log(` Numero é ${numero}`)
        console.log("Tente um número menor!");
    }

    // Pede um novo número dentro do loop
    resposta = Number(prompt("Digite outro número: "));
}

console.log(`Parabéns! Você acertou o número ${numero}!`);
