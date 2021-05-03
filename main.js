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
/* function calcolaBiglietto(distanza, eta) {
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
    var msg = console.log('il costo del tuo biglietto è ' + costoBiglietto.toFixed(2) + ' €'); 
    return msg;
} */

/* function completaCampi(nome) {
    return nomeBiglietto += nome;
} */
bottoneGeneraEl.addEventListener("click", function() {
    var nomeBiglietto = document.getElementById('nome_biglietto');
    nomeBiglietto.innerHTML += nomeEl;
});



