const listadepecas= ['pecasdeteste','AB','peca B']
console.log ('quantidade de caracteres')
if (listadepecas.length <= 10){
    }
console.log('as peças pode ser cadastradas');
for (let index = 0; index < listadepecas.length; index++) {
    const pecaatual = listadepecas [index];
    if (pecaatual.função < 3) {
console.log (pecaatual +':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
} else { 
    console.log (pecaatual + ': a peça pode ser cadastrada')
}

}
console.log('peso da peça')

const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100) {
    console.log ('peso suficiente')
} else {
    console.log ('valor insuficiente')
}
