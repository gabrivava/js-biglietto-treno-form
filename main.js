//Istruzioni:
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

// input utente
var distanceEl = document.querySelector('#distance').value;
console.log(distanceEl);
var etaEl = document.querySelector('#età').value;
console.log(etaEl);
var costoBiglietto;
var bottoneGeneraEl = document.getElementById('genera_biglietto');
var nomeEl = document.querySelector('#nome_utente').value;
console.log(nomeEl);
//funzione calcola prezzo biglietti
function calcolaBiglietto(distanza, eta) {
    var prezzoBase = 0.21;
    // sconti
    var scontiMinori = 0.21 - (0.21 / 100 * 20);
    var scontiOver = 0.21 - (0.21 / 100 * 40);
    if (eta == 0) {
        costoBiglietto = distanza * scontiMinori;
    } else if (eta == 2) {
        costoBiglietto = distanza * scontiOver;
    } else {
        costoBiglietto = distanza * prezzoBase;
    } 
   return costoBiglietto
}

// funzione numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// quale offerta viene applicata?
function wichSconto (eta) {
    if (eta == 0) {
        return 'Sconto minore';
    } else if (eta == 2) {
        return 'Sconto over 65+';
    }
    return 'Prezzo standard';
}
//evento bottone
bottoneGeneraEl.addEventListener("click", function() {
    document.getElementById('nome_biglietto').innerHTML = nomeEl;
    document.getElementById('offerta').innerHTML = wichSconto(etaEl);
    document.getElementById('carrozza').innerHTML = getRandomNumber(1, 40);
    document.getElementById('codice').innerHTML = getRandomNumber(90000, 99999);
    document.getElementById('costo_biglietto').innerHTML = calcolaBiglietto(distanceEl, etaEl).toFixed(2);
}
);




/* Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form. */