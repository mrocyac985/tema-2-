function Factorial(){
 let numero= parseInt(document.getElementById("numero").value, 10);
 let f= parseInt(1, 10);
 let i= parseInt(0, 10);
  while (i<numero){
    i=i+1;
    f=f*i;
  }  
  document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es " + f;
}