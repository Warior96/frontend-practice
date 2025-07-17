const bowling = {
    "players": [
        // { "name": "Stanlio", "tiri": [], "punteggioFinale": 0 },
        // { "name": "Ollio", "tiri": [], "punteggioFinale": 0 },
        // { "name": "Mr Bean", "tiri": [], "punteggioFinale": 0 },
        // { "name": "", "tiri": [], "punteggioFinale": 0 },
    ],
"setScores": function () {
    if (this.players[0].tiri.length < 10) {
        let strike = [];
        this.players.forEach((giocatore) => {
            let random = Math.floor(Math.random() * 11);
            giocatore.tiri.push(random);
            if (random == 10) {
                strike.push(giocatore.name);
            }
            giocatore.punteggioFinale = giocatore.tiri.reduce((acc, tiro) => acc + tiro, 0);
        });
        if (strike.length > 0) {
            let testoGiocatori = strike.join(" e ") + " ha" + (strike.length > 1 ? "nno" : "") + " fatto 10!";
            let divTesto = document.createElement("div");
            divTesto.textContent = testoGiocatori;
            divTesto.classList.add("strike-text");
            let img = document.createElement("img");
            img.src = "/media/strike.gif";
            img.classList.add("strike");
            let container = document.createElement("div");
            container.classList.add("strike-container");
            container.appendChild(divTesto);
            container.appendChild(img);
            document.body.appendChild(container);
            setTimeout(() => {
                container.classList.add("show");
            }, 10);
            setTimeout(() => {
                container.classList.remove("show");
                setTimeout(() => {
                    container.remove();
                }, 500);
            }, 2400);
        }
    }
},
    "addPlayer": function (nome) {
        // console.log(this.players)
        this.players.push({ "name": nome, "tiri": [], "punteggioFinale": 0 })
    },
    "setWinner": function () {
        this.players.sort((a, b) => b.punteggioFinale - a.punteggioFinale)
    },
    "createTable": function (string) {
        tableWrapper.innerHTML = ""
        this.players.forEach((giocatore, i) => {
            // this.players.sort((a, b) => b.punteggioFinale - a.punteggioFinale);
            let tr = document.createElement("tr")
            tr.innerHTML = `
                <th scope="row">${i + 1}</th>
                <td class=${string == "finale" && i == 0 ? "bg-danger" : ""}>${giocatore.name}</td>
                <td>${giocatore.tiri[0] !== undefined ? giocatore.tiri[0] : ""}</td>
                <td>${giocatore.tiri[1] !== undefined ? giocatore.tiri[1] : ""}</td>
                <td>${giocatore.tiri[2] !== undefined ? giocatore.tiri[2] : ""}</td>
                <td>${giocatore.tiri[3] !== undefined ? giocatore.tiri[3] : ""}</td>
                <td>${giocatore.tiri[4] !== undefined ? giocatore.tiri[4] : ""}</td>
                <td>${giocatore.tiri[5] !== undefined ? giocatore.tiri[5] : ""}</td>
                <td>${giocatore.tiri[6] !== undefined ? giocatore.tiri[6] : ""}</td>
                <td>${giocatore.tiri[7] !== undefined ? giocatore.tiri[7] : ""}</td>
                <td>${giocatore.tiri[8] !== undefined ? giocatore.tiri[8] : ""}</td>
                <td>${giocatore.tiri[9] !== undefined ? giocatore.tiri[9] : ""}</td>
                <td>${giocatore.punteggioFinale}</td>
            `
            tableWrapper.appendChild(tr)
        })
    },
}
/* creazione tabella giocatori */
let tableWrapper = document.querySelector("#tableWrapper")
bowling.createTable()
/* gioca turno */
let btnPlay = document.querySelector("#btnPlay")
btnPlay.addEventListener("click", () => {
    bowling.setScores()
    bowling.createTable()
    if (bowling.players[0].tiri.length == 10) {
        btnPlay.classList.add("d-none")
        btnRanking.classList.remove("d-none")
    }
})
/* nuovo giocatore */
let btnNewPlayer = document.querySelector("#btnNewPlayer")
let inputNewPlayer = document.querySelector("#inputNewPlayer")
btnNewPlayer.addEventListener("click", () => {
    if (inputNewPlayer.value.replace(/\s+/g, "") !== "") {
        bowling.addPlayer(inputNewPlayer.value);
        bowling.createTable();
        inputNewPlayer.value = "";
        if (bowling.players.length >= 2) {
            btnStart.disabled = false;
        }
    }
});
/* nuova partita */
let btnStart = document.querySelector("#btnStart")
btnStart.addEventListener("click", () => {
    btnNewPlayer.classList.add("d-none");
    btnPlay.classList.remove("d-none");
    btnStart.classList.add("d-none");
    document.querySelector(".bg-info").classList.add("d-none");
})
/* ranking */
let btnRanking = document.querySelector("#btnRanking")
btnRanking.addEventListener("click", () => {
    bowling.setWinner()
    bowling.createTable("finale")
    btnRanking.classList.add("d-none");
    btnResetScores.classList.remove("d-none");
    btnResetPlayers.classList.remove("d-none");
})
/* bottoni reset */
let btnResetScores = document.querySelector("#btnResetScores");
let btnResetPlayers = document.querySelector("#btnResetPlayers");
btnResetScores.addEventListener("click", () => {
    bowling.players.forEach((player) => {
        player.tiri = [];
        player.punteggioFinale = 0;
    });
    bowling.createTable();
    btnRanking.classList.add("d-none");
    btnResetScores.classList.add("d-none");
    btnResetPlayers.classList.add("d-none");
    btnPlay.classList.remove("d-none");
});
btnResetPlayers.addEventListener("click", () => {
    bowling.players = [];
    bowling.createTable();
    btnRanking.classList.add("d-none");
    btnResetScores.classList.add("d-none");
    btnResetPlayers.classList.add("d-none");
    btnPlay.classList.add("d-none");
    btnNewPlayer.classList.remove("d-none");
    btnStart.classList.remove("d-none");
    btnStart.disabled = true;
    document.querySelector(".bg-info").classList.remove("d-none");
});