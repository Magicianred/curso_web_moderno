// funcao sem retorno
function ImprimirSoma(a,b) {
    console.log(a + b)
} 
ImprimirSoma(2, 3)
ImprimirSoma(2) // NaN
//ImprimirSoma(2, 3, 4, 5, 6, 7, 8, 9); // 5
//ImprimirSoma();

// Funcao com retorno
function soma(a, b = 0){
    return a + b
} 
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())