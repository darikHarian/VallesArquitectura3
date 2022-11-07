$(document).ready(function(e) {
    $("proy-frame").fadeToggle(100).delay(200).fadeIn(500);
    
    $('#proy1').on('click', function(){
        $("#proy-frame").fadeToggle(0).delay(0).fadeToggle(400);
        $('#proy-frame').attr('src', 'centro-estetica-namaskar.html');
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

    $('#nav8').on('click', function(){
        $("#main-frame").fadeToggle(0).delay(0).fadeToggle(400);	
        $('#main-frame').attr('src', 'contacto.html');
    });
});