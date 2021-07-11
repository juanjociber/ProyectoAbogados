<?php


//Datos para el correo
$destinatario = "juanjohuiza@gmail.com";

//Llamando a los campos
$nombre= $_POST['name'];
$email= $_POST['email'];
$comentario= $_POST['comentarios'];


$header = "Enviando desde la página L&H Consultores";
$mensajeCompleto = $comentario. "\nAtentamente: ".$nombre;

//Enviando mensaje
mail($destinatario, $comentario, $mensajeCompleto, $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
//header('Location:mensaje_Envio.html');
?>