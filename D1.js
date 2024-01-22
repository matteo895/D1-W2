/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I "datatype" sono dei dati (Valori) detti anche (Primitivi) servono per rappresentare informazioni che si possono assegnare alle variabili. 

Essi sono:

string (Stringhe )= una sequenza di caratteri (Mario) messi tra una o due virgolette 
number (Numeri)= numeri decimali (65.12, 90.45) o interi (100,88)
boolean (Booleani)= rappresentano i valori di verità (True o False)
underfined (Indefinito) = valori speciali che rappresentano assenza di valore (Valore indefinito)
null (Nullo) = valori speciali che rappresentano assenza di valore (Valore nullo)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myname = "Matteo";
console.log(myname);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let num3 = num1 + num2;
console.log("NUMERO 3:", num3);

let risultatoaddizione = 12 + 20;
console.log(risultatoaddizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12;
console.log(x);
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*
myName = "Venturi"; //non è possibie assegnare un nuovo valore a const nome perchè è stato già valorizzato
console.log(myName); 
const myConstname = "Venturi";
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultatoSottrazione = 4 - x;
console.log(risultatoSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*creato variabili 

let name1 = "john";
let name2 = "JOHN";
console.log(name1 !== name2);
*/

/*verifica diversità entrambe

let name1 = "john";
let name2 = "JOHN";
let sonoDiverse = name1 !== name2;
console.log(sonoDiverse);
*/

/*
verican che la loro ugualinza sia true se entrambe diventano lowercase
*/

let name1 = "john";
let name2 = "JOHN";
let sonoUgualiLowercase = name1.toLowerCase() === name2.toLowerCase();
console.log(sonoUgualiLowercase);
