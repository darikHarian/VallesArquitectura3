<?php

// Main

if(isset($_POST['email'])) {
		
$email_to = "contacto@alphacorp.cl";	
$email_subject = "Mensaje de cliente desde vallesarquitectura.cl";
	
// Validación de datos
	
if(!isset($_POST['name']) ||
   !isset($_POST['subject']) ||
   !isset($_POST['email']) ||
   !isset($_POST['message'])) {
	
echo "Lo sentimos, hubo un error en sus datos y el formulario no pudo ser enviado en este momento.<br/> <br/>";
echo "Por favor, corrija sus datos e inténtelo nuevamente.";	
die();
}
	
// Contenido	
	
$email_message .= "Contenido del Mensaje.\n\n";  
$email_message .= "Nombre: ".$_POST['name']."\n";
$email_message .= "Asunto: ".$_POST['subject']."\n";
$email_message .= "Email: ".$_POST['email']."\n";
$email_message .= "Mensaje: ".$_POST['message']."\n";
 
// Envío mail
	
$headers = 'From: '.$email_from."\r\n". 
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail( $email_to, $email_subject, $email_message, $headers);  

echo "<center><b><br/><br/>¡Gracias por preferirnos!...<br/><br/>";
echo "Muy pronto nos pondremos en contacto con Usted! :)</b></center>";

}
?>