const alunos = 26
for (let index =0; index <= alunos; index++) {
    if (index === 0) {
        console.log('número é zero');
    }else if (index % 2 ===0){
        console.log('o número é par ' + index);
    }else {
        console.log('o número é ímpar ' +index);
    }
}