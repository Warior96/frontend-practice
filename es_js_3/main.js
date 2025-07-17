// ESERCIZIO 1:
// Realizzare un oggetto che rappresenti un garage:
// - Dovrà contenere una lista di automobili.Ciascuna automobile dovrà avere una marca(es.Fiat) ed un modello(es.Panda).
// - Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
const garage = {
    "automobili": [
        { "marca": "Fiat", "modello": ["Panda", "Doblò", "Tipo"], "disponibile": true },
        { "marca": "Renault", "modello": ["Megane", "Clio"], "disponibile": false },
        { "marca": "Ford", "modello": ["Mustang", "Puma", "Raptor", "Ranger"], "disponibile": true },
        { "marca": "Fiat", "modello": ["Punto"], "disponibile": true },
        { "marca": "Ford", "modello": ["Fiesta", "Focus"], "disponibile": false },
    ],
    "trovaModelli": function (marca) {
        let auto = this.automobili.filter(auto => auto.marca === marca);
        let modelli = auto.map(auto => auto.modello).reduce((acc, test) => acc.concat(test), [])
        if (modelli.length > 0) {
            return `Per la marca ${marca} ci sono questi modelli: ${modelli.join(", ")}`
        } else {
            return `Non sono presenti modelli per la marca ${marca}`;
        }
    },
    // "searchModels": function (brand) {
    //     let isNotFound = true
    //     this.automobili.forEach((car) => {
    //         if (car.marca.toLocaleLowerCase() == brand.toLocaleLowerCase() && car.disponibile) {
    //             console.log(`sono presenti questi modelli ${car.modello}`);
    //             isFound = false
    //         }
    //     })
    //     if (isNotFound) {
    //         console.log(`per questa marca ${brand} non è presente nessun modello`);
    //     }
    // },
    "InsertTarga":function (targaProva) {
        this.automobili.forEach((car)=>{
          car.targa=targaProva  
        })
    }
}
// console.log(garage.trovaModelli('Renault'));
// console.log(garage.trovaModelli("Fiat"));
// console.log(garage.trovaModelli(`Ford`));
// console.log(garage.trovaModelli(`Tesla`));
// garage.searchModels("fiat")
garage.InsertTarga("AA123BB")
console.log(garage.automobili);


// ESERCIZIO BOWLING:
// Continuare l'esercizio del bowling visto oggi a lezione. 
// Creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse funzionalità tra cui:

// - creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Utilizzare l’istruzione per generare un punteggio casuale da 1 a 10: Math.floor(Math.random()(10 - 1 + 1) + 1)

// - trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente(Attenzione! E’ un array di oggetti: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects)

// - aggiungere un nuovo giocatore

// - determinare il vincitore

// EXTRA:
// - Stampare la classifica dei giocatori

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const bowling = {
    "players": [
        { "nome": "Davide" },
        { "nome": "Alessandro" },
        { "nome": "Andrea" },
    ],
    "scores": function () {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].punteggio = []
            for (let j = 0; j < 10; j++) {
                let randomScores = Math.floor(Math.random() * (10 - 1 + 1) + 1)
                this.players[i].punteggio.push(randomScores)
            }
        }
    },
    "finalScores": function () {
        for (let i = 0; i < this.players.length; i++) {
            let punteggioTotale = this.players[i].punteggio.reduce((acc, num) => acc + num, 0)
            this.players[i]["punteggiofinale"] = punteggioTotale
        }
    },
    "aggiungiGiocatore": function (nome) {
        this.players.push({ nome })
    },
    "classifica": function () {
        let playersOrdinati = this.players.sort((a, b) => b["punteggiofinale"] - a["punteggiofinale"]);
        console.log(`classifica ${playersOrdinati.map(player => player.nome)}`);
        return playersOrdinati
    },
    "winner": function () {
        let playersOrdinati = this.classifica()
        console.log(`il vincitore è ${playersOrdinati[0].nome}`);
        return playersOrdinati
    }
}

bowling.aggiungiGiocatore("Ciccio")
bowling.aggiungiGiocatore("Franco")
bowling.scores();
bowling.finalScores()
console.log(bowling.players);
bowling.classifica()
bowling.winner()
// console.log();

// console.log(bowling.players);
// console.log(bowling.classifica());

