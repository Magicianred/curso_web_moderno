function tratarErroLancar(erro) {
    // throw 10;
    throw {
nome: erro.name,
msg: erro.message,
date: new Date

    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');

    } catch(e)  {
        tratarErroLancar(e)
    } finally {
      console.log('final');
    }
}

const obj = {nome: 'Gabi'}
imprimirNomeGritado(obj)