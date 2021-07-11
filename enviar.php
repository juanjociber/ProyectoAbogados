<?php
//Llamando a los campos
$nombre= $_POST['name'];
$email= $_POST['email'];
$email= $_POST['comentarios'];

//Datos para el correo
$destinatario = "juanjohuiza@gmail.com";
$asunto = "Contacto desde nuestra web";

$contenido  = "De: $nombre \n";
$contenido .= "Correo: $email \n";
$contenido .= "Mensaje: $comentario";

//Enviando mensaje
mail($destinatario,$asunto,$contenido);
header('Location:mensaje_Envio.html');
?>