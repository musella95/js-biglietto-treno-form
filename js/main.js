 

 let submitBtn = document.getElementById("submitBtn");
 
 
 submitBtn.addEventListener("click",function(){
    event.preventDefault()
    let name = document.getElementById("inputNameUser").value;
    let surname = document.getElementById("inputSurnameUser").value;
    let km =document.getElementById("inputKmUser").value;
    let age =document.getElementById("inputAge").value;

    console.log(name)
    console.log(surname)
    console.log(km)
    console.log(age)
 })

 