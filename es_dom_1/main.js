/* esercizio 1 */
let paragrafi = document.querySelectorAll(".paragrafi")
let buttonColor = document.querySelector("#buttonColor")
let buttonDisplay = document.querySelector("#buttonDisplay")
let buttonBold = document.querySelector("#buttonBold")

function colore(bottone1) {
    bottone1.addEventListener("click", () => {
        paragrafi.forEach(el => {
            el.style.color = `rgb(
            ${Math.floor(Math.random() * (255 + 1))}, 
            ${Math.floor(Math.random() * (255 + 1))}, 
            ${Math.floor(Math.random() * (255 + 1))}
            )`
        })
    })
}
colore(buttonColor)

function bold(bottone2) {
    bottone2.addEventListener("click", () => {
        paragrafi.forEach(el => {
            el.classList.toggle("fw-bold")
        })
    })
}
bold(buttonBold)

function visibility(bottone3) {
    bottone3.addEventListener("click", () => {
        paragrafi.forEach(el => {
            el.classList.toggle("d-none")
        })
    })
}
visibility(buttonDisplay)



/* esercizio 2 */
let titoloArt = document.querySelector("#titoloArt")
let paragrafoArt = document.querySelector("#paragrafoArt")
let buttonArt = document.querySelector("#buttonArt")

function aggArticolo() {
    buttonArt.addEventListener("click", () => {
        let articleWrapper = document.querySelector("#articleWrapper")
        articleWrapper.innerHTML = ""
        const title = titoloArt.value
        const paragraph = paragrafoArt.value
        let date = new Date();
        let formatDate = date.toLocaleDateString()
        let articolo = document.createElement("div")
        articolo.classList.add("col-10", "col-md-5", "border", "border-2", "border-primary", "rounded-3", "bg-dark", "text-white", "p-5", "m-2");
        articolo.innerHTML = `
                <h2>${title}</h2>
                <p>${paragraph}</p>
                <p>
                    Pubblicato il <data id="data" value="${formatDate}">${formatDate}</data>
                </p>
        `;
        articleWrapper.appendChild(articolo);
    })
}
aggArticolo();



/* esercizio 3 */
let contacts = [
    { 'id': 1, 'name': 'Nicola' },
    { 'id': 2, 'name': 'Fabio' },
    { 'id': 3, 'name': 'Luca' },
    { 'id': 4, 'name': 'Giulia' }
]
let listWrapper = document.querySelector("#listWrapper");
let ul = document.createElement("ul");
contacts.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el.name;
    ul.appendChild(li);
});
listWrapper.appendChild(ul);

let idCr = document.querySelector("#idCr")
let idDc = document.querySelector("#idDc")
let nameAZ = document.querySelector("#nameAZ")
let nameZA = document.querySelector("#nameZA")
let orderWrapper = document.querySelector("#orderWrapper");
// let ulCr = document.createElement("ul");
let order = document.createElement("p");
order.textContent = "Lista ordinata per: Nessun ordine";
orderWrapper.appendChild(order);
function updateList(wrapper, sortFunction, ordine) {
    wrapper.innerHTML = "";
    let sortedContacts = [...contacts].sort(sortFunction);
    let ul = document.createElement("ul");
    sortedContacts.forEach((el) => {
        let li = document.createElement("li");
        li.textContent = el.name;
        ul.appendChild(li);
    });
    order.textContent = `Lista ordinata per: ${ordine}`;
    wrapper.appendChild(order); 
    wrapper.appendChild(ul);
}
idCr.addEventListener("click", () => updateList(orderWrapper, (a, b) => a.id - b.id, "ID Crescente"));
idDc.addEventListener("click", () => updateList(orderWrapper, (a, b) => b.id - a.id, "ID Derescente"));
nameAZ.addEventListener("click", () => updateList(orderWrapper, (a, b) => a.name.localeCompare(b.name), "Nome A-Z"));
nameZA.addEventListener("click", () => updateList(orderWrapper, (a, b) => b.name.localeCompare(a.name), "Nome Z-A"));



// Es - 3:
// Dato un array di contatti:
// let contacts = [
//     { 'id': 1, 'name': 'Nicola'},
//     { 'id': 2, 'name': 'Fabio'},
//     { 'id': 3, 'name': 'Luca'},
//     { 'id': 4, 'name': 'Giulia'}
// ]
// Creare diversi pulsanti:

// per ordinarli tramite id in ordine crescente o decrescente
// per ordinarli tramite name in ordine alfabetico dalla A-Z e dalla Z-A

// documentazione per ordinare un array di oggetti: https://developer//r.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 