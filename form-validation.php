<?php

// Variables
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

// Destinatario
$email_to = "contacto@alphacorp.cl";	
$email_subject = "Mensaje de cliente desde vallesarquitectura.cl";
	
// Contenido del mensaje	
$email_message .= "Contenido del Mensaje.\n\n";  
$email_message .= "Nombre: " . $_POST['name'] ."\n";
$email_message .= "Asunto: " . $_POST['subject'] ."\n";
$email_message .= "Email: " . $_POST['email'] ."\n";
$email_message .= "Mensaje: " . $_POST['message'] ."\n";
 
// Muestra mail en texto plano
$header .= "Content-Type: text/plain";

// Función mail para envío del mensaje
mail($email_to, $email_subject, utf8_decode($email_message, $header));

// Redirección al enviar el mensaje con éxito
header('Location:form-success.html');

?>