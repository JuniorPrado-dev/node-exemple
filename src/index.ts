const userInput=require("readline-sync")

const nome=userInput.question("Qual seu nome? ")
const idade=userInput.question("Qual a idade? ")


console.log(`Olá ${nome} ! idade: ${idade}`);

const n=["a",2,false]