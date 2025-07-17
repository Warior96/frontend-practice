// Completate i Quiz per chi non lo avesse fatto, oggi carico quelli di JS

// ESERCIZIO 1:
// Dato un array di oggetti rappresentanti degli sviluppatori crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa
// let list = [
//     { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Gioacchino', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
];
let nDeveloper = (array) => {
    let devEJS = array.filter((proprietà) => (proprietà.continent == 'Europe' && proprietà.language == 'JavaScript'))
    // console.log(devEJS);
    // devEJS.forEach(devName => console.log(devName.firstName))
    return devEJS.length;
}
console.log(`numero sviluppatori europei che conoscono JavaScript= ${nDeveloper(list)}`)

// ESERCIZIO 2:
// Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
// Awee regà, mi chiamo < firstName > e lavoro con < language here >, ma effettivamente è meglio javascript
// let lista = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
let lista = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
let addGreeting = (array) => {
    let newArray = array.map(arr => {
        let obj = { ...arr }  //passa per valore non per riferimento
        obj.greeting = `Awee regà, mi chiamo ${obj.firstName} e lavoro con ${obj.language}, ma effettivamente è meglio javascript`
        return obj
    })
    return newArray
    // console.log(array);
}
console.log(addGreeting(lista));
console.log("sotto originale");
console.log(lista);

// ESERCIZIO 3:
// Dato un array di oggetti, crea una funzione che ritorni
// true se c’è almeno una persona che ha gli occhi verdi;
// false se nessuno ha gli occhi verdi

// consiglio con indovinello:
// anche la ricerca è importante per un web developer!
// Avete diverse strade da poter prendere, scegliete quella più consona.
// Dovete cercare sulla documentazione dei metodi che non abbiamo visto a lezione.
// parole chiave per capire i / il metodi / o:

// “se è incluso” / “se ci sono tutti” / “se ci sono alcuni”

// una delle parole chiave è errata.
// La traduzione in inglese vi farà capire le / la vostre / a vere / a chiavi / e

// let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
// ];
let liste = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
];
let occhi = (array, colorEyes) => array.some(persona => persona.eyes === colorEyes)
console.log(occhi(liste, 'Green'));

// ESERCIZIO 4:
// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:
// se logged = true: mostrare il messaggio “L’utente è stato registrato.”
// se logged = false: mostrare il messaggio “L’utente non è registrato.”

// let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
// ];

// Utilizzare alert() → metodo che fa visualizzare una finestra di pop - up per mostrare un messaggio di avviso all’utente
// alert('Messaggio di avviso per l'utente');

let listi = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
];
let login = (array) => {
    array.forEach(element => {
        if (element.logged === true) {
            alert(`L'utente ${element.firstName} ${element.lastName} è stato registrato.`)
        } else {
            alert(`L'utente ${element.firstName} ${element.lastName} non è registrato.`)
        }
    });
}
login(listi);