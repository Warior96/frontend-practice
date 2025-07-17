ESERCITAZIONE DOM 1

Es - 1:
Lavoriamo con il DOM: creare una pagina HTML con 3 paragrafi e 3 bottoni. 

Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
il secondo dovra’ rendere il testo dei paragrafi in grassetto 
il terzo dovra’ far scomparire e ricomparire i paragrafi!

------------------------------------------------------------------------------------------------


Es - 2:
Inserire nel file html due campi input ed un pulsante per generare un articolo:
(per prendere il valore, utilizzate inputCatturato.value)
un campo per inserire un titolo
un campo per inserire un paragrafo
inserire nell’articolo anche la data di pubblicazione tramite questa istruzione:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples

let date = new Date();
let formatDate = date.toLocaleDateString()
Implementare la seguente funzionalita’:

al click del pulsante, dovrete creare un articolo popolato dai valori prelevati dai due campi input
Potete prendere spunto da questa anteprima:

https://paper-attachments.dropboxusercontent.com/s_8F5DB4305EFC520583B27409AB015C12304CF05E89C307E9B71A2DBE424D31C5_1665642141390_Screenshot+210.png

--------------------------------------------------------------------------------------------------------


Es - 3:
Dato un array di contatti:
let contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] 
Visualizzare tutti i contatti mediante una lista

Creare diversi pulsanti:

per ordinarli tramite id in ordine crescente o decrescente
per ordinarli tramite name in ordine alfabetico dalla A-Z e dalla Z-A

documentazione per ordinare un array di oggetti: https://developer//r.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
