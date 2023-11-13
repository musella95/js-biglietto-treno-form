// INformazioni da chiedere all'utente

let kmTraveled = prompt("quanti chilometri devi percorrere?");
let age = prompt("quanti anni hai?");

// Elaborazione dei dati da testo a numerico 
kmTraveled = parseFloat(kmTraveled);
age = parseInt(age);


//elaborazione prezzo ticket

let priceTicket = (kmTraveled * 0.21);

let finalPrice = priceTicket.toFixed(2);

//sezione degli if 
// se l'acquirente ha meno di 18 anni ha uno sconto del 20%
// se l'acquirente è over 65 ha uno sconto del 40%
if (age < 18){
    priceTicket- (priceTicket*0.20)
}
else if (age >=65){
    priceTicket-(priceTicket*0.60)
}
else {
    priceTicket = priceTicket
};

console.log("il prezzo del biglietto e di €"+ finalPrice);
document.getElementById("finalPrice").innerHTML = finalPrice
