$(document).ready(function(e) {
    $("#main-frame").fadeToggle(100).delay(200).fadeIn(500);
    
    $('#nav1').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);
        $('#main-frame').attr('src', 'proyectos.html');
    });

    $('#nav2').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'experiencia.html');
    });

    $('#nav3').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'contacto.html');
    });
    
    $('#nav4').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'innovacion.html');
    }); 

    $('#nav5').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'servicios.html');
    }); 

    $('#nav6').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'innovacion.html');
    }); 

    $('#nav7').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'servicios.html');
    });
});