// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Valori bombe
var arrayBombe = [];
var numBombe = 16;

var gameOver = false;

// Valori utente
var arrayNumeriUtente = [];
var rangeNumeriUtente;

// Selezione della difficoltà
var difficolta;
var max;

difficolta = prompt("Seleziona il livello di difficoltà: Facile, Intermedio, Difficile, Impossibile.");
difficolta = difficolta.charAt(0).toUpperCase() + difficolta.slice(1).toLowerCase();

switch (difficolta) {
  case "Facile":
    max = 100;
    rangeNumeriUtente = "Inserisci un numero da 1 a 100";
    break;
  case "Intermedio":
    max = 80;
    rangeNumeriUtente = "Inserisci un numero da 1 a 80";
    break;
  case "Difficile":
    max = 50;
    rangeNumeriUtente = "Inserisci un numero da 1 a 50";
    break;
  case "Impossibile":
    max = 20;
    rangeNumeriUtente = "Inserisci un numero da 1 a 20";
    break;
}

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
while ((arrayNumeriUtente.length < (max- numBombe)) && (gameOver == false)) {

  // Do-while perché viene eseguito almeno la prima volta
  do {
    // Inserisco un numero
    var numeroUtente = parseInt(prompt(rangeNumeriUtente));
    // Condizioni per inserire il numero
  } while (isNaN(numeroUtente) || (numeroUtente < 1) || (numeroUtente > 100));

  // se il numero == array
  if (isInArray(arrayBombe, numeroUtente) == true) {
    // hai perso -> modifico partita in true ed esco dal ciclo white
    alert("BOOOOOOOOMMMMMMMMMM HAI PERSO!");
    alert("Hai fatto: " + (arrayNumeriUtente.length + 1) + " punti.");
    gameOver = true;
  }
  // se il numero != array
  else if (isInArray(arrayNumeriUtente, numeroUtente) == false) {
    // inserisco il numero nell'array utente
    arrayNumeriUtente.push(numeroUtente);
    // se l'array utente è == a max-mix
    if (arrayNumeriUtente.length == (max - numBombe))
      alert("SBAM! Hai vinto con " + arrayNumeriUtente.length + " punti!");
  }
  // se il numero utente è stato già inserito
  else if (isInArray(arrayNumeriUtente, numeroUtente) == true) {
    alert("Numero già inserito il numero " + numeroUtente + ", prego inserirne un altro");
  }
}


// Funzione creazione numeri Random
function getRandomNumber (min, max) {
  //Svolgo la funzione e invio
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione cerca doppi
function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    // se doppio è true
    if(value == array[i]) {
      return true;
    }
  }
  // no doppio è false
  return false;
}
