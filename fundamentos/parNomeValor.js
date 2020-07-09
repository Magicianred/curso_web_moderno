const saudacao = 'Opa' // contexto lexico 1 
function exec() {
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua maneira',
        numero: '123'
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)