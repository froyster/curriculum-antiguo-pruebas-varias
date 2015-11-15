<<<<<<< HEAD
//Vehiculos funciones
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
        document.getElementById("resultado").innerHTML = "Coche<br>interior o exterior: " + localStorage.Medio + " vehiculos.";
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



//Funcion para calcular el total de coches lavados.
function totalCoches(){
    tCoches = Number(localStorage.cp) + Number(localStorage.cm) + Number(localStorage.cg) + Number(localStorage.ctt) + Number(localStorage.cf) + Number(localStorage.Medio) + Number(localStorage.tp) + Number(localStorage.valor);
     document.getElementById("resultado").innerHTML="Total de coches: " + tCoches;
    
}
//aFuncion para ver el total facturado.
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
    cobroDia = Number(facturacionCoches -(facturacionCoches * (21/100)))*(21/100);
   
    document.getElementById("resultado").innerHTML="Facturacion total de los coches lavados hoy es: " + facturacionCoches + " €uros";
    
    
    
    
}
function mostrar(){
    totalCoches();
    totalFacturado();
    cobrar();
    document.getElementById("resultado").innerHTML="<br><h3>El total de coches lavados es: " + tCoches + "<br>El total facturado es: " + facturacionCoches + " €uros"+ "<br> Mi cobro es: " + cobroDia.toFixed(2) + " €uros</h3>" + "<br> " + "Coches pequeños: " + localStorage.cp + " vehiculos." + "<br>Coches grandes: " + localStorage.cm + " vehiculos." + "<br>Coches Extra-grandes: " + localStorage.cg + " vehiculos." + "<br>Coches Todo-Terrenos: " + localStorage.ctt + " vehiculos." + "<br>Furgones o Furgonetas: " + localStorage.cf + " vehiculos." + " <br>Coche solo,interior o exterior: " + localStorage.Medio + " vehiculos." + "<br>Tapiceria: " + localStorage.tp + " vehiculos." + "<br> Otros Importes: " + localStorage.valor + "<hr><h3>Mensual Acumulado</h3>" + "Facturado: " + localStorage.mes +" €" + "<br>Mes Cobro: " + cobro.toFixed(2) + " €" ; 
      
}
function reset(){
    var confirmar = confirm("¿Esta usted seguro de querer Borrar todos los datos?");
    if(confirmar !== true){
       
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

    
//inicializar los datos.
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

//Funcion para introducir un importe por teclado.
function importe(){
    
    if(typeof(Storage) !== "undefined") {
        if (localStorage.valor) {
            localStorage.valor = Number(localStorage.valor)+1;
        } else {
            localStorage.valor = 1;
        }
        document.getElementById("resultado").innerHTML = "Otros importes: " + localStorage.valor + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
    }
    
    var Importe = parseFloat(document.getElementById("importe").value);
    
    
    if (localStorage.importe) {
            localStorage.importe = Number(localStorage.importe)+ Importe;
                   
        } else {
            localStorage.importe = 0;
        }
    mostrar();
}

//Boton para mandar los resultados por email.

function enviar(){
    var dato = document.getElementById("resultado");
   
    document.getElementById("dato").innerHTML = "<h1><a href='mailto:froyster@gmail.com?subject=Datos del dia de trabajo&body=Pegar datos aqui:'>Enviar por <<>> EMAIL</a></h1>" + dato.textContent;

}
// Restar por equivocacion o abono.

function resta(){
        var restar = Number(prompt("Introduce el importe a descontar","0"));
        if(restar === 0 || restar !== Number(restar) ){ 
        
        mostrar();
    
        }else{
        localStorage.importe -= Number(restar);
        localStorage.valor -= Number(1);
        mostrar();
    }
        
    }

            // Total mes cobro y facturado.
    //creacion del dato.
    
    function mes(){
        
   var datosDelDia = facturacionCoches;
   
   
        if(typeof(Storage) !== "undefined") {
        if (localStorage.mes) {
            localStorage.mes = Number(localStorage.mes)+ datosDelDia;
        } else {
            localStorage.mes = 0;
        }
        document.getElementById("resultado").innerHTML = "Mensual: " + localStorage.valor + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
    }
    
    mostrar();
    }
    
    // Borrado del dato mensual.
    
    function mesReset(){
        localStorage.mes = 0;
        
        mostrar();
    }
    function cobrar(){
         //variable para saber lo que yo cobro
        cobro = Number(localStorage.mes -(localStorage.mes * (21/100)))*(21/100);
=======
//Vehiculos funciones
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
        document.getElementById("resultado").innerHTML = "Coche<br>interior o exterior: " + localStorage.Medio + " vehiculos.";
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



//Funcion para calcular el total de coches lavados.
function totalCoches(){
    tCoches = Number(localStorage.cp) + Number(localStorage.cm) + Number(localStorage.cg) + Number(localStorage.ctt) + Number(localStorage.cf) + Number(localStorage.Medio) + Number(localStorage.tp) + Number(localStorage.valor);
     document.getElementById("resultado").innerHTML="Total de coches: " + tCoches;
    
}
//aFuncion para ver el total facturado.
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
    cobroDia = Number(facturacionCoches -(facturacionCoches * (21/100)))*(21/100);
   
    document.getElementById("resultado").innerHTML="Facturacion total de los coches lavados hoy es: " + facturacionCoches + " €uros";
    
    
    
    
}
function mostrar(){
    totalCoches();
    totalFacturado();
    cobrar();
    document.getElementById("resultado").innerHTML="<br><h3>El total de coches lavados es: " + tCoches + "<br>El total facturado es: " + facturacionCoches + " €uros"+ "<br> Mi cobro es: " + cobroDia.toFixed(2) + " €uros</h3>" + "<br> " + "Coches pequeños: " + localStorage.cp + " vehiculos." + "<br>Coches grandes: " + localStorage.cm + " vehiculos." + "<br>Coches Extra-grandes: " + localStorage.cg + " vehiculos." + "<br>Coches Todo-Terrenos: " + localStorage.ctt + " vehiculos." + "<br>Furgones o Furgonetas: " + localStorage.cf + " vehiculos." + " <br>Coche solo,interior o exterior: " + localStorage.Medio + " vehiculos." + "<br>Tapiceria: " + localStorage.tp + " vehiculos." + "<br> Otros Importes: " + localStorage.valor + "<hr><h3>Mensual Acumulado</h3>" + "Facturado: " + localStorage.mes +" €" + "<br>Mes Cobro: " + cobro.toFixed(2) + " €" ; 
      
}
function reset(){
    var confirmar = confirm("¿Esta usted seguro de querer Borrar todos los datos?");
    if(confirmar !== true){
       
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

    
//inicializar los datos.
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

//Funcion para introducir un importe por teclado.
function importe(){
    
    if(typeof(Storage) !== "undefined") {
        if (localStorage.valor) {
            localStorage.valor = Number(localStorage.valor)+1;
        } else {
            localStorage.valor = 1;
        }
        document.getElementById("resultado").innerHTML = "Otros importes: " + localStorage.valor + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
    }
    
    var Importe = parseFloat(document.getElementById("importe").value);
    
    
    if (localStorage.importe) {
            localStorage.importe = Number(localStorage.importe)+ Importe;
                   
        } else {
            localStorage.importe = 0;
        }
    mostrar();
}

//Boton para mandar los resultados por email.

function enviar(){
    var dato = document.getElementById("resultado");
   
    document.getElementById("dato").innerHTML = "<h1><a href='mailto:froyster@gmail.com?subject=Datos del dia de trabajo&body=Pegar datos aqui:'>Enviar por <<>> EMAIL</a></h1>" + dato.textContent;

}
// Restar por equivocacion o abono.

function resta(){
        var restar = Number(prompt("Introduce el importe a descontar","0"));
        if(restar === 0 || restar !== Number(restar) ){ 
        
        mostrar();
    
        }else{
        localStorage.importe -= Number(restar);
        localStorage.valor -= Number(1);
        mostrar();
    }
        
    }

            // Total mes cobro y facturado.
    //creacion del dato.
    
    function mes(){
        
   var datosDelDia = facturacionCoches;
   
   
        if(typeof(Storage) !== "undefined") {
        if (localStorage.mes) {
            localStorage.mes = Number(localStorage.mes)+ datosDelDia;
        } else {
            localStorage.mes = 0;
        }
        document.getElementById("resultado").innerHTML = "Mensual: " + localStorage.valor + " vehiculos.";
    } else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
    }
    
    mostrar();
    }
    
    // Borrado del dato mensual.
    
    function mesReset(){
        localStorage.mes = 0;
        
        mostrar();
    }
    function cobrar(){
         //variable para saber lo que yo cobro
        cobro = Number(localStorage.mes -(localStorage.mes * (21/100)))*(21/100);
>>>>>>> 20f28141af7ed81ccc0b9dbc430733cdc5f8e5d3
    }