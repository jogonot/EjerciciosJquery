/*
$("#").hide()

$("#").show()

$("documento").ready(function(){
    $("el texto").show(
    $("las imagenes").hide()
})
$("document").on cuando clik  que se shoy uno u otro;
$añadir un mouseover soble (img) width a 300 y para salir mouse out


$("algo").on("click",function(){
     $("el texto").show(
    $("las imagenes").hide()
})


$("algo").on("click"(pero mouseover),function(){
    $(algo).css(width:300px,height:500px);

    $("#anuncio").on("click",function(){
*/

$("index.html").ready(function(){
    $("h1").show()
    $("#carrete").hide()
})

$("h1").on("click", function(){
    $("#carrete").fadeIn(3000)
    $("h1").hide()
    $("#carrete").show()
    
})

$("#1").on("mouseover",function(){
   
    $("#1").css("width", "300")
    $("#1").css("transform", "rotate(360deg)")
    $("#1").css("transition", "0.5s")
})
$("#1").on("mouseout",function(){ 
    $("#1").css("width", "250")
    $("#1").css("transform", "rotate(-360deg)")
    $("#1").css("transition", "0.5s")

    })

    $("#2").on("mouseover",function(){
   
        $("#2").css("width", "300")
        $("#2").css("transform", "rotate(360deg)")
        $("#2").css("transition", "0.5s")
    })
    $("#2").on("mouseout",function(){ 
        $("#2").css("width", "250")
        $("#2").css("transform", "rotate(-360deg)")
        $("#2").css("transition", "0.5s")
        })
    
        $("#3").on("mouseover",function(){
   
            $("#3").css("width", "300")
            $("#3").css("transform", "rotate(360deg)")
            $("#3").css("transition", "0.5s")
        })
        $("#3").on("mouseout",function(){ 
            $("#3").css("width", "250")
            $("#3").css("transform", "rotate(-360deg)")
            $("#3").css("transition", "0.5s")
            })
        
            $("#4").on("mouseover",function(){
   
                $("#4").css("width", "300")
                $("#4").css("transform", "rotate(360deg)")
                $("#4").css("transition", "0.5s")
            })
            $("#4").on("mouseout",function(){ 
                $("#4").css("width", "250")
                $("#4").css("transform", "rotate(-360deg)")
                $("#4").css("transition", "0.5s")
            
                })
            
                        
