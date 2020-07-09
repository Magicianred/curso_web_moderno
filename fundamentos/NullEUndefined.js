/*
const a = {name: 'teste'}
const b = a
b.name = 'Opa'
*/
 let valor // não inicializada
 console.log(valor)

 valor = null // ausência de valor
 console.log(valor)
// toString())  // type error

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.90


produto.preco = undefined  //evitar atribuir undefined de forma explicita
console.log(!!produto.preco)
console.log(produto)