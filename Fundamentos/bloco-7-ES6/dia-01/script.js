//  Parte I   - Exercicio 01
/* function testingScope(escopo) {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */


// mudar a estrutura da função para que ela seja uma arrow function.
/* const testingScope = escopo => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

// mudar as concatenações para template literals.
/* const testingScope = escopo => {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = '${ifScope} ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }

}

testingScope(true);
 */

// Parte I  - Exercicio 02
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉 */

// Faça uma função que retorne o array oddsAndEvens em ordem crescente. Use
// o template literals ara que a chamada console.log(<seu código>oddsAndEvens<seu 
// código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens()
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); */


// usando array sort
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(oddsAndEvens); */


// Parte II  - Exercicio 01

/* Abaixo, você verá algumas especificações de algoritmos 
para desenvolver. É fundamental que você utilize o que 
aprendeu sobre let , const , arrow functions , 
template literals e ternary operator . */
// 1 - Crie uma função que receba um número e retorne seu fatorial.
/* Na matemática, o fatorial de um número não negativo N , com a notação N! ,
é o produto de todos os inteiros menores ou iguais a N . 
Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */