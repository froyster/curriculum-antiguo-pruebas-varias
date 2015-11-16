window.onload=function(){
    fecha();
};
function fecha(){
    var hoy = new Date();
    var cumple = new Date("05/16/1978 09:30:15");
    var cp = hoy.getFullYear(); //Dato del Coptright
    var web = document.getElementById("cp");
    var difAno = hoy.getFullYear() - cumple.getFullYear();
    var difMeses = hoy.getMonth() - cumple.getMonth();
        if (hoy.getDate()<cumple.getDate()) {
            difMeses -=1;
        };
    var dia = 1000*60*60*24;//transformamos los milisegundos en un segundo estos en un minuto y estos en un dia.
    var cumpleDia = cumple.getDate();
    var hoyDia = hoy.getDate();
    var dias = (function(){
        var pequeno = Math.min(cumpleDia,hoyDia);
        var grande = Math.max(cumpleDia,hoyDia);
        if (pequeno === hoyDia) {
            return  ((hoy.getTime() - cumple.getTime())/dia) - ((difAno*365)+(difMeses*30)); //error no se que hacer
        } else{
            return hoyDia - cumpleDia ;
        };
    });
    var difDias = (Math.round( dias()/* <--ejecutamos la funcion*/)); //error no consigo calcular el dia.
    web.innerHTML = " " + cp + "<< >> Luchando " + difAno + " Años " + difMeses + " Meses " + difDias + " Dias ";
}
