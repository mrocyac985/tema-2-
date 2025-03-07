function comprobar(){
 let nota= parseFloat(document.getElementById("nota").value, 10);

    if(nota>=0 && nota<=10){
        if(nota<5){
            document.getElementById("resultado").innerHTML = "Suspenso.";
        }
        else {
            document.getElementById("resultado").innerHTML = "Aprobado.";
         }
    }
    else{
        document.getElementById("resultado").innerHTML = "El número que has puesto no válido.";
    }
}