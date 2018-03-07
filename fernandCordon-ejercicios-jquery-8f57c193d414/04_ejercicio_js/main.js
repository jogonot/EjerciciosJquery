let colores = ["blue","yellow","red","grey","green","orange","purple"]



// seleccionas un color en especifico el uno el primero
//let color =colores [1]

$("#anuncio").ready(function(){
   $("#anuncio")
    .width(500)
    .height(500)
  //escribes un texto //meter un width y un height
    .text("!CLICK! para cambiar de color")
//lo esconde
    .hide()
//aparece en tres sefundos
    .fadeIn(3000)})
  
    $("#anuncio").on("click",function(){
        let color = colores [Math.floor(Math.random()*colores.length)];
       //para sacar palabras aleatoriamente
        $("#anuncio").css("background", color);
    })



//para clikar
//$("#anuncio").on("clik mouseover",function(){
    //$...})
 //y meter la lista t dentro la variable color y que coja el numero
//$("div").css("color")
//$("div").css("color","blue") en vez de blue poner la operacion