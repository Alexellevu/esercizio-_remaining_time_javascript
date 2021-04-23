//quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e
var oraAttuale = new Date();
var minutiAttuali = oraAttuale.getMinutes();
console.log(minutiAttuali);
var minutiInUnOra = 60; 
// attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
var risultato = minutiInUnOra - minutiAttuali;
console.log(risultato);
var message = 'alla fine dell\'ora mancano ' + risultato + 'minuti' ;
document.getElementById('msg').innerHTML = message;




