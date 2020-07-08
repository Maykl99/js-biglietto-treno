/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */



// metodo 1

var lunghezzaViaggio = parseInt(prompt('Quanti km devi percorrere?'));
var etaViaggiatori = parseInt(prompt('Quanti anni hai?'));
var prezzoKm = 0.21 * lunghezzaViaggio;
var scontoSulPrezzoMinori;
var scontoSulPrezzoOver;


if(isNaN(lunghezzaViaggio) || isNaN(etaViaggiatori) || isNaN(prezzoKm)){  // Controllo valori passanti
    alert('inserisci soltanto numeri e non lasciare vuoti i campi di compilazione!'); 
} 

else{ // esegui se e solo se i valori sono numerici
    if(etaViaggiatori < 18){
        var scontoSulPrezzoMinori = ( 20 * prezzoKm / 100 );
        var prezzoFinale = prezzoKm - scontoSulPrezzoMinori;
    }

    else if(etaViaggiatori > 65){
        var scontoSulPrezzoOver = ( 40 * prezzoKm / 100 );
        var prezzoFinale = prezzoKm - scontoSulPrezzoOver;
    }

    else{
        var prezzoFinale = prezzoKm;
    }

    var risultato= document.getElementById('risultato').innerHTML='il tuo biglietto costa ' +  Math.round(prezzoFinale) + ' euro'; 
}











// metodo 2

/* var  prezzoKm;
var lunghezza;
var eta;

function Viaggio(){
    var lunghezza=parseInt(prompt('Quanti km devi percorrere?'));
    var eta=parseInt(prompt('Quanti anni hai?'));
    var prezzoKm= 0.21 * lunghezza;
    if(eta < 18){
      var prezzoKm= ( prezzoKm * 20 / 100 ) - prezzoKm;
      var sconto18 = prezzoKm;
      return 'Hai '+ eta + ' anni il prezzo del tuo biglietto è di ' + sconto18 + ' euro per la distanza di ' + lunghezza + ' km';
    }
    else if(eta >= 65){
        var prezzoKm= ( prezzoKm * 40 / 100 ) - prezzoKm;
        var sconto65= prezzoKm;
        return 'Hai '+ eta + ' anni il prezzo del tuo biglietto è di ' + sconto65 + ' euro per la distanza di ' + lunghezza + ' km';
    }
    else{
        return 'Hai '+ eta + ' anni il prezzo del tuo biglietto è di ' + prezzoKm + ' euro per la distanza di ' + lunghezza + ' km';
    }
    
}


console.log(Viaggio()) */