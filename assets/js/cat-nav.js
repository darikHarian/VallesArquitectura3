$(document).ready(function(e) {
    $("#proy-frame").fadeToggle(100).delay(200).fadeIn(500);
    
    $('#cat1').on('click', function(){
        $("#proy-frame").fadeToggle(0).delay(0).fadeToggle(400);
        $('#proy-frame').attr('src', 'proyectos/cat-viviendas.html');
    });

    $('#cat2').on('click', function(){
        $("#proy-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#proy-frame').attr('src', 'proyectos/cat-clinicas.html');
    });

    $('#cat3').on('click', function(){
        $("#proy-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#proy-frame').attr('src', 'proyectos/cat-otros.html');
    });
});