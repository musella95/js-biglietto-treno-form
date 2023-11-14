 

 let submitBtn = document.getElementById("submitBtn");
 
 
 submitBtn.addEventListener("click",function(){
    event.preventDefault()
    let name = document.getElementById("inputNameUser").value;
    let surname = document.getElementById("inputSurnameUser").value;
    let km =document.getElementById("inputKmUser").value;
    let age =document.getElementById("inputAge").value;
    let ticketPrice= (km*0.21);
    let finalPrice = ticketPrice.toFixed(2);
    if (age==="underAge") {
    finalPrice = ticketPrice * 0.8;
    }
    else if (age==="overAge") {
        finalPrice = ticketPrice * 0.6;
        console.log("sono overage")
    }


     document.getElementById("passengerName").innerHTML=name;
     document.getElementById("passengerSurname").innerHTML=surname;
     document.getElementById("distanceKm").innerHTML=km;
     document.getElementById("ticketCode").innerHTML=Math.floor(Math.random() * 100001);
     document.getElementById("ticketPrize").innerHTML= finalPrice;

 })

 