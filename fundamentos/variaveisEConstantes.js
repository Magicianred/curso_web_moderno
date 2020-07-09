var a = 3
 b = 4
// vai dar um erro no node pq a variável já foi declarada
// variáveis com let não podem ser declaradas mais de uma vez
var a = 30
b = 40
console.log(a,b)
a = 300
b = 400
console.log(a,b)
// só coloque const se de fato não for mudar nada 
const c = 5 
console.log(c)