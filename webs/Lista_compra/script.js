$(document).ready(function(){
    $("#boton").mouseover(function(){
        $("#boton").fadeTo("slow", 0.75).css("background-color","blue");
    });
    $("#boton").mouseleave(function(){
        $("#boton").fadeTo("slow", 1).css("background-color","red");
    });
    $('#boton').click(function(){
        var Agregar = $('input[name=checkListItem]').val();
            $('.lista').append( '<div class="item">' + Agregar + '</div>' );
            $("input:text").val(" ").focus(); //borramos el checkbox
            $("div[class='item']").click(function(){            //aqui creamos el tachacdo de las tareas
                $(this).css("text-decoration", "line-through").css("color", "blue");
                });
            
    });    
    $(document).on('dblclick', '.item' , function(){
     $(this).remove();
    });
});

