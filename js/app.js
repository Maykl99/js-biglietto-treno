/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */


var lunghezzaViaggio=parseInt(prompt('Quanti km devi percorrere?'));
var etaViaggiatori=parseInt(prompt('Quanti anni hai?'))
var prezzoKm=0.21*lunghezzaViaggio;
var scontoSulPrezzoMinori;
var scontoSulPrezzoOver;

if(etaViaggiatori < 18){
    var scontoSulPrezzoMinori= ( 20 * prezzoKm / 100 );
    var prezzoFinale = prezzoKm - scontoSulPrezzoMinori;
}

else if(etaViaggiatori >= 65){
    var scontoSulPrezzoOver= ( 40 * prezzoKm / 100 );
    var prezzoFinale= prezzoKm - scontoSulPrezzoOver;
}

else{
    var prezzoFinale=lunghezzaViaggio;
}


var risultato= document.getElementById('risultato').innerHTML='il tuo biglietto costa '+ prezzoFinale + ' euro';
