function comprobador() {
    let número = parseInt(document.getElementById("número").value);
     
    if(isNaN(número)){
        alert("por favor, ingrese un número válido.");
        return;
    }

    if (número % 2 == 0){
       document.getElementById("mensaje").textContent = "El número es par";
    }
   else {
       document.getElementById("mensaje").textContent = "El número es impar";
  
}
}          