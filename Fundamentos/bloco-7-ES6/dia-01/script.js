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

/* const factorial = (number) => {
    let result = 1;
    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }
    return result;
}

console.log(factorial(4)); */

// Recursiva
/* Bônus (opcional): tente fazer o mesmo exercício de forma recursiva .
 Spoiler: É possível resolver com uma linha usando ternary operator . */
/* 
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));
 */
// Parte II  - Exercicio 02
// Crie uma função que receba uma frase e retorne qual a maior palavra.
// exemplo :longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
// retorna 'aconteceu'
/* const longestWord = frase => {
    let arrayStr = frase.split(' ');
    let maior = 0;
    let palavra = '';

    for (const str of arrayStr) {
        if (str.length > maior) {
            maior = str.length;
            palavra = str;
        }
    }
    return palavra;
}
console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));
 */
// longestWord com sort em uma linha
/* const longestWord = frase => frase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu')); */

// Parte II - Exercicio 3
/* Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a 
variável clickCount é atualizada. */


/* let clickCount = 0;
let contaButton = document.getElementById('#texto')
document.getElementById('but')
    .addEventListener('click', () => contaButton.innerHTML= clickCount += 1); */

// Parte II - Exercicio 4
/*  Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. 
Sua função deverá procurar pela letra x em uma string qualquer que você 
determinar e substituir pela string que você passou como parâmetro. 
Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, 
contendo cinco strings com suas principais skills .
 */

const array = ["Android", "iOS", "Architecture", "Teach ", "Run"];

function buildSkillsPhrase(param) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!  Tudo bem?`
    );
    let rsult = `${fun1(param)}
    Minhas cinco principais habilidades são:`;
    array.forEach((skill, index) =>
        rsult = `${rsult} - ${skill}`);
    rsult = `${rsult} #goTrybe`;
    return rsult;
}

console.log(buildSkillsPhrase("Patrícia"));