function Pedirdatos(){
    let nombre = document.getElementById("nombre").value; 
    let edad = parseInt(document.getElementById("edad").value, 10);
    document.getElementById("mensaje").innerHTML = " Hola " + nombre + ", tienes " + edad + " años.";
}
