/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */


var lunghezzaViaggio=parseInt(prompt('Quanti km devi percorrere?')); // KM da percorrere
var etaViaggiatori=parseInt(prompt('Quanti anni hai?')); // età viaggiatori
var prezzoKm= 0.21 * lunghezzaViaggio; // prezzo in base la distanza di KM



if(etaViaggiatori < 18){
    var scontoSulPrezzoMinori= 20 * prezzoKm / 100;
    document.getElementById('risultato').innerHTML="il tuo biglietto è scontato del 20%, importo dovuto " + scontoSulPrezzoMinori + " euro";
}else if(etaViaggiatori >= 65){
    var scontoSulPrezzoOver= 40 * prezzoKm / 100;
    document.getElementById('risultato').innerHTML="il tuo biglietto è scontato del 40%, importo dovuto" + scontoSulPrezzoOver+ " euro";
}else{
    document.getElementById('risultato').innerHTML='non possiamo applicare nessuno sconto, importo dovuto ' + prezzoKm + " euro";
}




/* function scontoMinori(){    // prezzo scontato del 20% se è un minore 
    if(etaViaggiatori>18){
        let scontoSulPrezzoMinori = 20 * prezzoKm / 100;
    }else{
        etaViaggiatori;
    }
    
}

function scontoOver(){ // prezzo scontato del 40% se è un over 65
    if(etaViaggiatori >= 65){
        let scontoSulPrezzoOver= 40 * prezzoKm / 100;
    }else{
        etaViaggiatori;
    }
} */



























// var scontoSulPrezzoMinori= 20 * prezzoKm / 100;
// var scontoSulPrezzoOver= 20 * prezzoKm / 100;

/* console.log('Questo è il prezzo del biglietto in base alla distanza che vuoi perocorrere ' + prezzoKm + 'euro');
console.log('questo è il tuo sconto del 20% sul prezzo finale ' + scontoSulPrezzo + 'euro') */