const prompt = require("prompt-sync")();

const valor1 = parseFloat(prompt("Digite um valor: "));
const operador = prompt("Digite um operador (+, -, *, /, ^, @): ")



if(operador === "@"){
    if(valor1 <= 0){
        console.log("Não existe raiz de 0 ou de números negativos")
    }
    else{
    console.log("A raiz de " + valor1 + " é: " + Math.sqrt(valor1))
    process.exit();
}
}
else{

const valor2 = parseFloat(prompt("Digite outro valor: "));
let resultado;

if(operador === "+"){
    resultado = valor1 + valor2
}
else if(operador === "-"){
    resultado = valor1 - valor2
}
else if(operador === "*"){
    resultado = valor1 * valor2
}
else if(operador === "/"){
    if(valor2 <= 0){
    console.log("Não é possível dividir um número por 0")
    }
    else{
        resultado = valor1 / valor2
    }
}
else if(operador === "^"){
    resultado = valor1 ** valor2
}
else{
    console.log("Operação inválida")
}
console.log("Resultado: " + resultado)
}