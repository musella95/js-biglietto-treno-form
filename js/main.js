// INformazioni da chiedere all'utente

let kmTraveled = prompt("quanti chilometri devi percorrere?");
let age = prompt("quanti anni hai?");

// Elaborazione dei dati da testo a numerico 
kmTraveled = parseFloat(kmTraveled);
age = parseInt(age);


//elaborazione prezzo ticket

let ticketPrice = (kmTraveled * 0.21);



//sezione degli if 
// se l'acquirente ha meno di 18 anni ha uno sconto del 20%
// se l'acquirente è over 65 ha uno sconto del 40%
if (age < 18) {
    ticketPrice = ticketPrice * 0.8;
}
else if (age >= 65) {
    ticketPrice = ticketPrice * 0.6
        ;
}
let finalPrice = ticketPrice.toFixed(2);

console.log("il prezzo del biglietto e di €"+ finalPrice);
document.getElementById("biglietto").innerHTML = finalPrice;
