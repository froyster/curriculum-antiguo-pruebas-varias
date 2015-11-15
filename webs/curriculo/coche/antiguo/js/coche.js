/* 
 * Pagina creada por Javier Sánchez Sánchez.
 * para ponerse en contacto por email: javiersanchez.mlg@gmail.com
 * twitter: @froysterland.
 */
 
  

function pequeno(){
   
    if(typeof(Storage) !== "undefined") {
        if (localStorage.cp) {
            localStorage.cp = Number(localStorage.cp)+1;
        } else {
            localStorage.cp = 1;
        }
        document.getElementById("resultado").innerHTML = "Coches pequeños: " + localStorage.cp + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
    }
function mediano(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.cm) {
            localStorage.cm = Number(localStorage.cm)+1;
        } else {
            localStorage.cm = 1;
        }
        document.getElementById("resultado").innerHTML = "Coches medianos: " + localStorage.cm + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
}
function grande(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.cg) {
            localStorage.cg = Number(localStorage.cg)+1;
        } else {
            localStorage.cg = 1;
        }
        document.getElementById("resultado").innerHTML = "Coches grandes: " + localStorage.cg + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
    
}
function todoterreno(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.ctt) {
            localStorage.ctt = Number(localStorage.ctt)+1;
        } else {
            localStorage.ctt = 1;
        }
        document.getElementById("resultado").innerHTML = "Coches Todo-Terrenos: " + localStorage.ctt + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
   mostrar();
}
function furgon(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.cf) {
            localStorage.cf = Number(localStorage.cf)+1;
        } else {
            localStorage.cf = 1;
        }
        document.getElementById("resultado").innerHTML = "Furgones o Furgonetas: " + localStorage.cf + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
}
function medio(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.Medio) {
            localStorage.Medio = Number(localStorage.Medio)+1;
        } else {
            localStorage.Medio = 1;
        }
        document.getElementById("resultado").innerHTML = "Coche solo,<br>interior o exterior: " + localStorage.Medio + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
}
function tapiceria(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.tp) {
            localStorage.tp = Number(localStorage.tp)+1;
        } else {
            localStorage.tp = 1;
        }
        document.getElementById("resultado").innerHTML = "Tapiceria: " + localStorage.tp + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
}
function totalCoches(){
    tCoches = Number(localStorage.cp) + Number(localStorage.cm) + Number(localStorage.cg) + Number(localStorage.ctt) + Number(localStorage.cf) + Number(localStorage.Medio) + Number(localStorage.tp) + Number(localStorage.valor);
     document.getElementById("resultado").innerHTML="Total de coches: " + tCoches;
    
}
//arreglado
function totalFacturado(){
    
    Fcp = localStorage.cp * parseFloat("16.50");
    Fcm = localStorage.cm * parseFloat("17");
    Fcg = localStorage.cg * parseFloat("18");
    Fctt = localStorage.ctt * parseFloat("20");
    Fcf = localStorage.cf * parseFloat("23");
    FMedioCoche = localStorage.Medio * parseFloat("10");
    Ftp = localStorage.tp * parseFloat("115");
    Fvalor = parseFloat(localStorage.importe);
    facturacionCoches = Fcp +Fcm +Fcg + Fctt +Fcf +FMedioCoche+Ftp+Fvalor;
   
    document.getElementById("resultado").innerHTML="Facturacion total de los coches lavados hoy es: " + facturacionCoches + " €uros";
    
    
    
}
function mostrar(){
    totalCoches();
    totalFacturado();
      document.getElementById("resultado").innerHTML="<br><h3>El total de coches lavados es: " + tCoches + "<br>El total facturado es: " + facturacionCoches + " €uros</h3>" + "<br> " + "Coches pequeños: " + localStorage.cp + " vehiculos." + "<br>Coches grandes: " + localStorage.cm + " vehiculos." + "<br>Coches Extra-grandes: " + localStorage.cg + " vehiculos." + "<br>Coches Todo-Terrenos: " + localStorage.ctt + " vehiculos." + "<br>Furgones o Furgonetas: " + localStorage.cf + " vehiculos." + " <br>Coche solo,interior o exterior: " + localStorage.Medio + " vehiculos." + "<br>Tapiceria: " + localStorage.tp + " vehiculos." + "<br> Otros Importes: " + localStorage.valor; 
      
}
function reset(){
    var confirmar = confirm("¿Esta usted seguro de querer Borrar todos los datos?");
    if(confirmar !== true){
        mostrar();
    }
    else{
    localStorage.cp = 0;
    localStorage.cm = 0;
    localStorage.cg = 0;
    localStorage.ctt = 0;
    localStorage.cf = 0;
    localStorage.Medio = 0;
    localStorage.tp = 0;
    localStorage.valor = 0;
    localStorage.importe = 0;
}
    mostrar();
}

    

function  inicio(){
    if(typeof(Storage) === "undefined"){
    localStorage.cp = 0;
    localStorage.cm = 0;
    localStorage.cg = 0;
    localStorage.ctt = 0;
    localStorage.cf = 0;
    localStorage.Medio = 0;
    localStorage.tp = 0;
    localStorage.valor =0;
    localStorage.importe = 0;
    
    }
    mostrar();
    
}


function importe(){
    
    if(typeof(Storage) !== "undefined") {
        if (localStorage.valor) {
            localStorage.valor = Number(localStorage.valor)+1;
        } else {
            localStorage.valor = 1;
        }
        document.getElementById("resultado").innerHTML = "Tapiceria: " + localStorage.valor + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    var Importe = parseFloat(prompt("Introduce el importe del servicio prestado","00"));
    if (localStorage.importe) {
            localStorage.importe = Number(localStorage.importe)+ Importe;
        } else {
            localStorage.importe = 0;
        }
    mostrar();
}