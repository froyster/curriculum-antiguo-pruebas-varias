var tCoches , cobro, cobroDia ;

//Vehiculos funciones
function c1(){
       if(typeof(Storage) !== "undefined") {
            if (localStorage.c1) {
                localStorage.c1 = Number(localStorage.c1)+1;
            }
            else {
                localStorage.c1 = 1;
            }
        }
        else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
        mostrar();
        }

function c2(){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.c2) {
                localStorage.c2 = Number(localStorage.c2)+1;
            } else {
                localStorage.c2 = 1;
            }

      } else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
        mostrar();
}
function c3(){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.c3) {
                localStorage.c3 = Number(localStorage.c3)+1;
            } else {
                localStorage.c3 = 1;
            }
        } else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
        mostrar();

}
function c4(){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.c4) {
                localStorage.c4 = Number(localStorage.c4)+1;
            } else {
                localStorage.c4 = 1;
            }
        } else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
       mostrar();
}
function c5(){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.c5) {
                localStorage.c5 = Number(localStorage.c5)+1;
            } else {
                localStorage.c5 = 1;
            }
    } else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
        mostrar();
}
function c6(){
        if(typeof(Storage) !== "undefined") {
            if (localStorage.c6) {
                localStorage.c6 = Number(localStorage.c6)+1;
            } else {
                localStorage.c6 = 1;
            }
    } else {
            document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
        }
        mostrar();
}
function c7(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.c7) {
            localStorage.c7 = Number(localStorage.c7)+1;
        } else {
            localStorage.c7 = 1;
        }
} else {
        document.getElementById("resultado").innerHTML = "Tu navegador no  soporta localstorage...";
    }
    mostrar();
}
        //Funcion para introducir un importe por teclado.
function c8(){

    if(typeof(Storage) !== "undefined") {
        if (localStorage.c8) {
            localStorage.c8 = Number(localStorage.c8)+1;
        } else {
            localStorage.c8 = 1;
        }
} else {
        document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
    }

    var Importe = parseFloat(document.getElementById("c8Importe").value);


    if (localStorage.c8Importe) {
            localStorage.c8Importe = Number(localStorage.c8Importe)+ Importe;

        } else {
            localStorage.c8Importe = 0;
        }
    mostrar();
};


            //Funcion para calcular el total de coches lavados.
function totalCoches(){
             tCoches = Number(localStorage.c1) + Number(localStorage.c2) + Number(localStorage.c3) + Number(localStorage.c4) + Number(localStorage.c5) + Number(localStorage.c6) + Number(localStorage.c7) + Number(localStorage.c8);
     }

function mostrar(){
            totalCoches();
            totalFacturado();
            cobrar();
            document.getElementById("resultado").innerHTML="<br><h3>El total de coches lavados es: " + tCoches + "<br>El total facturado es: " + facturacionCoches + " €uros"+ "<br> Mi cobro es: " + cobroDia.toFixed(2) + " €uros</h3>" + "<br> " + "Coches pequeños: " + localStorage.c1 + " vehiculos." + "<br>Coches grandes: " + localStorage.c2 + " vehiculos." + "<br>Coches Extra-grandes: " + localStorage.c3 + " vehiculos." + "<br>Coches Todo-Terrenos: " + localStorage.c4 + " vehiculos. " + "<br>Furgones o Furgonetas: " + localStorage.c5 + " vehiculos. " + " <br>Coche solo,interior o exterior: " + localStorage.c6 + " vehiculos. " + "<br>Tapiceria: " + localStorage.c7 + " vehiculos. " + "<br> Otros Importes: " + localStorage.c8 + "<hr><h3>Mensual Acumulado</h3> " + " Facturado: " + localStorage.mes +" €" + " <br>Mes Cobro: " + cobro.toFixed(2) + " € " + "<br>" + localStorage.cocheMes + " Coches Lavados" ;
            cambiarTexto();

}



//Boton para mandar los resultados por email.

function enviar(){
        var dato = document.getElementById("resultado");
        var hora = document.getElementById("clock");
        document.getElementById("dato").innerHTML = "<h1><a href='mailto:froyster@gmail.com?subject=Datos del dia de trabajo&body=Pegar datos aqui:'>Enviar por <<>> EMAIL</a></h1>" + dato.textContent + "<br>" +hora.textContent ;

}
        // Restar por equivocacion o abono.

function resta(){
        var restar = Number(prompt("Introduce el importe a descontar","0"));
        if(restar === 0 || restar !== Number(restar) ){

        mostrar();

        }else{
            localStorage.c8Importe -= Number(restar);
            localStorage.c8 -= Number(1);
            mostrar();
    }

    }

            // Total mes cobro y facturado.
    //creacion del dato.

function mes(){
        var datosDelDia = facturacionCoches;
        var cochesDia = tCoches;

        if(typeof(Storage) !== "undefined" ) {
                if (localStorage.mes) {
                    localStorage.mes = Number(localStorage.mes)+ datosDelDia;
                } else {
                    localStorage.mes = 0;
                }
   }   else {
           document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
       }
        if(typeof(Storage) !== "undefined") {
                if (localStorage.cocheMes) {
                    localStorage.cocheMes = Number(localStorage.cocheMes)+ cochesDia;
                } else {
                    localStorage.cocheMes = 0;
                }
   }   else {
           document.getElementById("resultado").innerHTML = "Tu navegador no soporta localstorage...";
       }

    mostrar();
    }

    // Borrado del dato mensual.

function mesReset(){
        localStorage.mes = 0;
        localStorage.cocheMes = 0;
        mostrar();
    }
function cobrar(){
         //variable para saber lo que yo cobro
        cobro = Number(localStorage.mes -(localStorage.mes * (21/100)))*(21/100);
    }

function reset(){
    var confirmar = confirm("¿Esta usted seguro de querer Borrar todos los datos?");
    if(confirmar !== true){
                //Si no se acepta se deja igual sino se resetean los datos con el else.
    }
    else{
            localStorage.c1 = 0;
            localStorage.c2 = 0;
            localStorage.c3 = 0;
            localStorage.c4 = 0;
            localStorage.c5 = 0;
            localStorage.c6 = 0;
            localStorage.c7 = 0;
            localStorage.c8 = 0;
            localStorage.c8Importe = 0;
            localStorage.resta = 0;
        }
            (function (){  //creamos funcion autoejecutable para restablecer valores por defecto de los precios de las casillas
                var segPregunta = confirm("¿Quieres restablecer los precios a sus valores por defecto?");
            if(segPregunta === true){
                  localStorage.c1Precio = 17;
                  localStorage.c2Precio = 18;
                  localStorage.c3Precio = 20;
                  localStorage.c4Precio = 20;
                  localStorage.c5Precio = 25;
                  localStorage.c6Precio = 10;
                  localStorage.c7Precio = 115;
            }}());

    mostrar();
}


//Funcion para ver el total facturado.
function totalFacturado(){
    var Fc1 = localStorage.c1 * parseFloat(localStorage.c1Precio);
    var Fc2 = localStorage.c2 * parseFloat(localStorage.c2Precio);
    var Fc3 = localStorage.c3 * parseFloat(localStorage.c3Precio);
    var Fc4 = localStorage.c4 * parseFloat(localStorage.c4Precio);
    var Fc5 = localStorage.c5 * parseFloat(localStorage.c5Precio);
    var Fc6 = localStorage.c6 * parseFloat(localStorage.c6Precio);
    var Fc7 = localStorage.c7 * parseFloat(localStorage.c7Precio);
    var Fc8 = parseFloat(localStorage.c8Importe);

    facturacionCoches = Fc1 +Fc2 +Fc3 + Fc4 +Fc5 + Fc6 + Fc7 + Fc8 ;
    cobroDia = Number((facturacionCoches -(facturacionCoches * (21/100)))*(21/100));

   }
/*--------------------------------------------------------------*/
    //zona nueva
    //zona de cambiar precios del diario de Trabajo.

function cambioPrecio(valor){
        var cuadro = document.getElementById(valor).value;
        if(valor === "cp1"){
            localStorage.c1Precio = cuadro; //Establecemos el precio indicado en la vasriable del cuadro 1
        }else if(valor === "cp2"){
            localStorage.c2Precio = cuadro;
         }else if(valor === "cp3"){
            localStorage.c3Precio = cuadro;
        }else if(valor === "cp4"){
            localStorage.c4Precio = cuadro;
        }else if(valor === "cp5"){
            localStorage.c5Precio = cuadro;
        }else if(valor === "cp6"){
            localStorage.c6Precio = cuadro;
        }else if(valor === "cp7"){
            localStorage.c7Precio = cuadro;
        }else{}
    }
function cambiarTexto(){
        document.getElementById("c1texto").innerHTML = localStorage.c1Precio;
        document.getElementById("c2texto").innerHTML = localStorage.c2Precio;
        document.getElementById("c3texto").innerHTML = localStorage.c3Precio;
        document.getElementById("c4texto").innerHTML = localStorage.c4Precio;
        document.getElementById("c5texto").innerHTML = localStorage.c5Precio;
        document.getElementById("c6texto").innerHTML = localStorage.c6Precio;
        document.getElementById("c7texto").innerHTML = localStorage.c7Precio;


}
