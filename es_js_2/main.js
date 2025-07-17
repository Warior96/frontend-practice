// ESERCIZIO 1:
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. 
// Esempio: let array = [1, 5 ,7 ,12]; Output = 25; 
let array = [1, 5, 7, 12];
let sommaNumeri = (arr) => arr.reduce((acc, num) => acc + num, 0)
console.log(sommaNumeri(array));


// ESERCIZIO 2:
// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media.
// Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2] 
let a = [3, 5, 10, 2, 8];
let mediaN = (arr) => (arr.reduce((acc, num) => acc + num, 0)) / arr.length
let val_min = (arr2) => arr2.filter(arr => arr < mediaN(arr2))
// console.log(typeof val_min(a));
console.log(`media= ${mediaN(a)}, valori minori=` + val_min(a));


// ESERCIZIO 3:
// Scrivi un programma che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare una delle seguenti operazioni:  addizione, sottrazione, moltiplicazione, divisione e di eseguire il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio. 
// Esempio: 
// Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" 
// Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
let array1 = []
let array2 = []
for (let i = 0; i < 10; i++) {
    array1.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
    array2.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
}
let operazioni = (array1, array2, nomeOperazione) => {
    let risultato = [];
    for (let i = 0; i < array1.length; i++) {
        switch (nomeOperazione) {
            case "addizione":
                risultato.push(array1[i] + array2[i]);
                break;
            case "sottrazione":
                risultato.push(array1[i] - array2[i]);
                break;
            case "moltiplicazione":
                risultato.push(array1[i] * array2[i]);
                break;
            case "divisione":
                risultato.push(Math.round(array1[i] / array2[i]));
                break;
            default:
                return console.log("Operazione non valida");
        }
    }
    return risultato;
}
let nomeOperazione = prompt("inserisci operazione tra addizione sottrazione moltiplicazione divisione")
risultatoOperazioni = operazioni(array1, array2, nomeOperazione);
console.log("array 1:", array1);
console.log("array 2:", array2);
console.log(nomeOperazione, risultatoOperazioni);


/* alternativa piu veloce con .map */
let array1Map = []
let array2Map = []
for (let i = 0; i < 10; i++) {
    array1Map.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
    array2Map.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
}
let operazioniMap = (array1Map, array2Map, nomeOperazioneMap) => {
    let risultatoMap = [];
    // for (let i = 0; i < array1Map.length; i++) {
    switch (nomeOperazioneMap) {
        case "+":
            risultatoMap = array1Map.map((valore, i) => valore + array2Map[i])
            break;
        case "-":
            risultatoMap = array1Map.map((valore, i) => valore - array2Map[i])
            break;
        case "*":
            risultatoMap = array1Map.map((valore, i) => valore * array2Map[i])
            break;
        case "/":
            risultatoMap = array1Map.map((valore, i) => Math.round(valore / array2Map[i]))
            break;
        default:
            return console.log("Operazione non valida");
    }
    // }
    return risultatoMap;
}
let nomeOperazioneMap = prompt("inserisci operazione tra + - * /")
risultatoOperazioniMap = operazioniMap(array1Map, array2Map, nomeOperazioneMap);
console.log("array 1 Map:", array1Map);
console.log("array 2 Map:", array2Map);
console.log(nomeOperazioneMap, risultatoOperazioniMap);



// ESERCIZIO 4:
//  Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array:
// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’] 
// il risultato dovrà dare,
// let filtered = [‘hackademy’, ‘Javascript’, ‘php’]
// HINT: provate a filtrare in base al tipo di dato (operatore typeof) oppure puoi utilizzare il metodo .includes()
let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php']
let tipoDato = (arr) => arr.filter((typeString) => typeof typeString === `string`)
console.log(tipoDato(mixArray))

/* aleternativa includes, assocaito ad un array restituiscve true o false se quegli elementi si trovano o meno nell'array*/
let notGood = [100, false, null];
let filtered = mixArray.filter((el)=> !notGood.includes(el));
console.log(filtered);


// RUBRICA
// Replicare l'oggetto smartphone visto a lezione e provare ad implementare il medoto "rimuovi contatto" se avete tempo provate ad aggiungere altre funzionalità.

let smartphone = {
    "marca": "Motorola",
    "modello": "Razr",
    "versione": "V3",
    "prezzo": 100000,
    "disponibilità": false,
    "contatti": [
        ["Tizio", "3334445556"],
        ["Caio", "3331112224"],
        ["Sempronio", "3335556667"]
    ],
    /* findIndex restituisce la posizione del primo elemento corrispondente che trova, se non trova nulla restituisce -1 */
    "rimuovi contatto": function (nameContact) {
        let posizioneDaRimuovere = this.contatti.findIndex(contatto => contatto[0] === nameContact);
        if (posizioneDaRimuovere !== -1) {
            this.contatti.splice(posizioneDaRimuovere, 1)
            console.log(`${nameContact} rimosso`);
        } else {
            console.log(`${nameContact} non trovato`);
        }
    }
}

console.log(smartphone.contatti);
smartphone["rimuovi contatto"](prompt("scrivi il nome del contatto da rimuovere"))
console.log(smartphone.contatti);