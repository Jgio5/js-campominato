// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var arrayBombe = [];
var numBombe = 16;
var max = 100;
var partitaPersa = false;

var arrayNumeriUtente = [];


// while perché non so quante volte dovrò ripetere il ciclo per avere 16 numeri diversi
while (arrayBombe.length < numBombe) {
  // evoco la funzione dando un minimo e un max del range dei numeri Random
  var numeroGenerato = getRandomNumber(1, max);
  // se il numero nonè doppio rispetto all'array..
  if (isInArray(arrayBombe, numeroGenerato) == false) {
    // .. inserisco il numero nell'array
    arrayBombe.push(numeroGenerato);
  }
}

// continuo finché i numeri sono minori di max-min e la partita non è persa
while ((arrayNumeriUtente.length < (max- numBombe)) && (partitaPersa == false)) {

  // Do-while perché viene eseguito almeno la prima volta
  do {
    // Inserisco un numero
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    // Condizioni per inserire il numero
  } while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 100));

  // se il numero == array
  if (isInArray(arrayBombe, numeroUtente)) {
    // hai perso -> modifico partita in true ed esco dal ciclo white
    alert("Hai perso");
    partitaPersa = true;
  }
  // se il numero != array
  else if (isInArray(arrayNumeriUtente, numeroUtente) == false) {
    // inserisco il numero nell'array utente
    arrayNumeriUtente.push(numeroUtente);
    // se l'array utente è == a max-mix
    if (arrayNumeriUtente.length == (max - numBombe))
      alert("Hai vinto!");
  }
  // se il numero utente è stato già inserito
  else if (isInArray(arrayNumeriUtente, numeroUtente) == true) {
    alert("Numero già inserito, prego inserirne un altro");
  }
  console.log(numeroUtente);
}


// Funzione creazione numeri Random
function getRandomNumber (min, max) {
  //Svolgo la funzione e invio
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione cerca doppi
function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if(value == array[i]) {
      return true;
    }
  }
  return false;
}
