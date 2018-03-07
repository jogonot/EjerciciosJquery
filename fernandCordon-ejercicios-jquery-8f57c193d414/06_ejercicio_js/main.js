/*
1 cundo clikas encima de la linea de cerrar se cierra el banes #cerrar
$("algo").remove() y lo borra
2las imagenes se sustituyen, no se borran 
$("").replaceWith("<aqui va metido el html>")
                   ("<div class="saludo">Hello</div>")
*/
$("#cerrar").on("click", function(){    
    $("#banner").remove()
})

$("#imagen1").on("click", function(){
    $("#imagen1").replaceWith("<p class='texto'>ohh, si es una imagen...</p>");
})


$("#imagen2").on("click", function(){
    $("#imagen2").replaceWith("<p class='texto'>ohh, si es una imagen...</p>");
})


$("#imagen3").on("click", function(){
    $("#imagen3").replaceWith("<p class='texto'>ohh, si es una imagen...</p>");
})


$("#imagen4").on("click", function(){
    $("#imagen4").replaceWith("<p class='texto'>ohh, si es una imagen...</p>");
})
