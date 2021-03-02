//Elenco variabili
var arrayBombe = [];
var arrayNumeriUtente = [];
var numBombe = 16;
var max = 100;

/*Fino a quando l'array delle bombe è inferiore al numBombe allora genera un numero random tra 1 e 100.
Se il numero generato non è già compreso nell'array delle bombe allora inseriscilo all'interno dello stesso */
while (arrayBombe.length < numBombe) {
    var numeroGenerato = getRandomNumber(1, max);
    if (isInArray(arrayBombe , numeroGenerato) == false) {
        arrayBombe.push(numeroGenerato);
    }
}

console.log(arrayBombe);

var partitaPersa = false;
/*Fino a quando l'array dei numeri inseriti dall'utente è inferiore ai tentativi possibili e la variabile "partita persa" 
è falsa fai comparire il prompt "Inserisci numero"*/
while ((arrayNumeriUtente.length < (max - numBombe)) && (partitaPersa == false)) {
    var numeroUtente = parseInt(prompt("Inserisci numero"));
    partitaPersa = false;
    /*Se il numero inserito dall'utente è contenuto nell'array delle bombe l'utente ha perso e la variabile "partita persa"
    diventa vera*/
    if (isInArray(arrayBombe , numeroUtente)) {  
        alert("Hai perso. Il tuo punteggio è di " + ((max - numBombe)-arrayNumeriUtente.length) + " punti");
        partitaPersa = true;
    }
    /*Se il numero dell'utente non è già presente nell'array dei numeri utente (quindi se l'utente non ha già inserito quel
    numero) inserisci il numero dell'utente all'interno dell'array numeri utente*/
    else if (isInArray(arrayNumeriUtente, numeroUtente)== false) {
        arrayNumeriUtente.push(numeroUtente);
    }
    /*se il numero dell'utente è già presente nell'array dei numeri utente (quindi se l'utente ha già inserito quel
    numero) fai comprarire un alert che avvisi l'utente*/
    else if (isInArray(arrayNumeriUtente, numeroUtente)== true) {
        alert("Numero già inserito");
    }
    /*Se la lunghezza dell'array dei numeri utente è pari al numero di tentativi possibili fai comparire un alert che avvisi
    l'utente di aver vinto*/
    else if (arrayNumeriUtente.length == (max - numBombe)) {
        alert("Hai vinto");
    }
}


//Funzioni da utilizzare durante il programma
function getRandomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray (array , value) {
    for (i = 0; i < array.length; i++) {
        if (value == array[i]) {
            return true;
        }
    }
    return false;
}
