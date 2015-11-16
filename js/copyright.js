window.onload=function(){
    fecha();
};


function fecha(){
    var hoy = new Date();
    var cumple = new Date("05/19/1978 09:30:15");
    var cp = hoy.getFullYear();
    var web = document.getElementById("cp");
    var difAno = hoy.getFullYear() - cumple.getFullYear();
    var difMeses = hoy.getMonth() - cumple.getMonth();
    //calculo del numero de dias esto es mas complicado utilizamos getTime(); devuelde el dato en milisegundos asi
    //que a transformarlo en dias;
    var dia = 1000*60*60*24;//transformamos los milisegundos en un segundo estos en un minuto y estos en un dia.
    
    var dif = hoy.getTime() - cumple.getTime();
        //error
    
    var difDias = (Math.round(Math.abs( dif/dia )))  ; //error no consigo calcular el dia.
    web.innerHTML = " " + cp + " << >> Luchando " + difAno + " Años " + difMeses + " Meses " + difDias + " Dias "   ; 
}   
