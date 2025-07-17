/* ESERCIZIO 1
Dati i seguenti array mischiati e confusi:
let array_1 =[
 ['un', 'per', 'incatenarli.'],
 ['Anello', 'trovarli,'],
 ['ghermirli', 'e'],
 ['gondor', 'mark'],
];

let array_2 = [
 [['trovarli,']],
 ['tu,', 'sciocchi'],
 ['tu,', 'sciocchi', ['padron', 'Sauron']],
 ['nel', ['fuggite', 'gandalf']],
 [['domarli,', 'passare'], 'buio']
];

Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“ 
HINT
Non tutte le parole sono necessarie per la frase;
Occhio agli array annidati */

let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];
let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];
// console.log(array_1);
// console.log(array_2);
let sintesi = `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]}`
// console.log(sintesi);
console.log(sintesi, array_2[4][0][0], sintesi, array_1[1][1], sintesi, array_1[2][0], array_1[2][1], array_2[3][0], array_2[4][1], array_1[0][2]);


/* ESERCIZIO 2
Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

N dovra’ rappresentare il parametro formale della funzione
tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz' */

function stampN(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 15 == 0) {
            console.log("fizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
stampN(1)

/* ESERCIZIO 3
Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

Esempio:
Input : 9 → output: 1 cifra
Input : 99 → output: 2 cifre
Input: 12000 → output: Numero troppo grande */

function contaCifre(num) {
    if (num < 0) {
        console.log("inserire solo numeri positivi");
    } else if (num > 10000) {
        console.log("numero troppo grande");
    } else if (Number.isInteger(num) == false) {
        console.log("inserire solo numeri interi");
    } else {
        let nString = num.toString()
        let nArray = nString.split("")
        let nCifre = nArray.length
        console.log(nCifre);
        if (nCifre == 1) {
            console.log(`${nCifre} cifra`);
        } else {
            console.log(`${nCifre} cifre`);
        }
    }
}
contaCifre(10)
/* aleternaztiva piu veloce */
function contaCifre2(num) {
    if (num < 0) {
        console.log("inserire solo numeri positivi");
    } else if (num > 10000) {
        console.log("numero troppo grande");
    } else if (Number.isInteger(num) == false) {
        console.log("inserire solo numeri interi");
    } else {
        let nString = num.toString().length
        // console.log(nString);
        if (nString == 1) {
            console.log(`${nString} cifra`);
        } else {
            console.log(`${nString} cifre`);
        }
    }
}
contaCifre2(1)

/* ESERCIZIO 4
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]

Variante:
Prova ad ordinali in modo crescente. */

let array1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]

function ordineDescrescente(a, b) {
    return b - a;
}
console.log(array1.sort(ordineDescrescente));

function ordineCrescente(a, b) {
    return a - b;
}
console.log(array1.sort(ordineCrescente));


// ESERCIZIO 5:
// Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array:
// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// dovra’ restituire come risultato, let newArray = [50, 70, 90]

let numbers1 = [10, 20, 30];
console.log(numbers1);
let numbers2 = [40, 50, 60];
console.log(numbers2);
function sommaArray(arrayUno, arrayDue) {
    let arraySomma = []
    for (let i = 0; i < arrayUno.length; i++) {
        let num1 = arrayUno[i]
        let num2 = arrayDue[i]
        let somma = num1 + num2
        arraySomma.push(somma)
    }
    return arraySomma
}
console.log(sommaArray(numbers1, numbers2));




let sommadiArray = []
for (let i = 0; i < numbers1.length; i++) {
    sommadiArray.push(numbers1[i] + numbers2[i])
}
console.log(sommadiArray);


// EXTRA:
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:

// HINT 
// Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true

let test = "i topi non avevano nipoti"
function palindroma(input) {
    input=input.replace(/\W/g, "")
    let contrario = input.split("").reverse().toString().replace(/\W/g, "")   
    let risultato= input === contrario
    return risultato
}
console.log(palindroma(test));

/* alternativa */
/* .join('') = .toString().replace(/\W/g, "") */

let test2 = "i topi non avevano nipoti"
function palindroma2(input2) {
    input2=input2.replace(/\W/g, "")
    let contrario2 = input2.split("").reverse().join('')
    let risultato2= input2 === contrario2
    return risultato2
}
console.log(palindroma2(test2));