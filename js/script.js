
// Chiedi di inserire nome cognome e colore preferito e stampa a schermo tutto in minuscolo  



var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore preferito');

nome = nome.toLowerCase();
cognome = cognome.toLowerCase();
colore = colore.toLowerCase();

document.write(nome + cognome + colore + '21');



// BONUS PERSONALE
var pass = nome + cognome + colore + '21';

document.getElementById('password').innerHTML = pass;



// LEGENDA

// prompt = Il metodo prompt() visualizza una finestra di dialogo che richiede l'input al visitatore.

// toLowerCase() = Il toLowerCase()metodo converte una stringa in lettere minuscole.