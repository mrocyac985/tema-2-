function MensajeSwitch(){
 let hora= parseFloat(document.getElementById("hora").value, 10);
     switch(hora){
        case 7:
        case 8:
        case 9:
        case 10:
        case 11: 
        case 12:

      document.getElementById("resultado").innerHTML = "¡Buenas días!";
       break;
       
       case 13:
       case 14:
       case 15:
       case 16:
       case 17:
       case 18:
       case 19:
       case 20:
       case 21:      
      document.getElementById("resultado").innerHTML = "¡Buenas tardes!";
       break; 

       case 22:
       case 23:
       case 24:
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
       case 6:       
      document.getElementById("resultado").innerHTML = "¡Buenas noches!";
       break;
       
       default:
        document.getElementById("resultado").innerHTML = "No es valido";
       break;
       }
    }
 function MensajeIf(){
    let hora= parseFloat(document.getElementById("hora").value, 10);

    if(hora>6 && hora<13){
        document.getElementById("resultado").innerHTML = "¡Buenos días!";
    }

    else if(hora>11 && hora<22){
        document.getElementById("resultado").innerHTML = "¡Buenos tardes!";
    }

    else if((hora>21 && hora<25) || (hora>0 && hora<7)){
        document.getElementById("resultado").innerHTML = "¡Buenos noches!";
    }

    else{
        document.getElementById("resultado").innerHTML = "No es valido";
    }
 }
 