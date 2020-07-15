userWord = prompt('Inserisci una parola'); // chiedo all'utente di inserire una parola

if (palindrome(userWord)){ // controllo se la parola è palindroma tramite funzione e stampo il risultato
    document.getElementById('word').innerHTML = userWord + ' ' + 'è una parola palindroma';
} else {
    document.getElementById('word').innerHTML = userWord + ' ' + 'non è una parola palindroma';
}

function palindrome(word){ // creo una funzione che controlla se la parola passata come argomento è palindroma
    word = word.toLowerCase(); // rendo tutte le lettere della parola minuscole
    var reversedWord = ''; // creo la variabile per la parola invertita
    for (var i = word.length - 1; i >= 0; i--){ // scorro la parola passata come argomento dall'ultima lettera alla prima
        reversedWord += (word[i]); // assegno ogni lettera alla parola invertita
    }
    if (word == reversedWord) { // controllo se la parola invertita è uguale alla parola passata come argomento
        return true;
    } else {
        return false;
    }
}
