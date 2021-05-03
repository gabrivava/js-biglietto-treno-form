//Istruzioni:
/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

// input utente
var distance = prompt('distanza da percorrere');
var eta = prompt("eta del passeggero");
var prezzoBase = 0.21;
var costoBiglietto;

distance = parseInt(distance);
eta = parseInt(eta);

if (isNaN(distance) || isNaN(eta)) {
    alert('hai sbagliato.')
} else {

    // sconti
    var scontiMinori = 0.21 - (0.21 / 100 * 20);
    var scontiOver = 0.21 - (0.21 / 100 * 40);
    //output
    
    if (eta < 18) {
        costoBiglietto = distance * scontiMinori;
    } else if (eta > 65) {
        costoBiglietto = distance * scontiOver;
    } else {
        costoBiglietto = distance * prezzoBase;
    }  
    var messaggio = 'il costo del tuo biglietto è ' + costoBiglietto.toFixed(2) + ' €';

    // display the result
    document.getElementById('msg_biglietto').innerHTML = messaggio;


}