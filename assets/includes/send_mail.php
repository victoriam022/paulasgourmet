<?php
//Send email

$to_text = "To: =?UTF-8?B?" . base64_encode($toName) . "?= <" . $toEmail . ">\r\n";
$from_text = "From: =?UTF-8?B?" . base64_encode($name) . "?= <" . $email . ">\r\n";
$cc_text = "CC: =?UTF-8?B?" . base64_encode($ccname) . "?= <" . $ccemail . ">\r\n";
$subject = "Nueva solicitud de cotización para " . $event_type;
$subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
$message = "<html><head><title> " . $subject . "</title></head><body><h1>Detalles cotización</h1><table style='border: 0;color:#4d4d4d;font-size:14px;width:100%' width='100%'><tr><td>Nombre:</td><td> " . $name . " </td></tr><tr><td>Telefono:</td><td> " . $phone . " </td></tr><tr><td>Evento:</td><td> " . $event_type . " </td></tr><tr><td>Fecha Evento:</td><td> " . $event_datetime . " </td></tr><tr><td>Adultos:</td><td> " . $adults . " </td></tr><tr><td>Niños:</td><td> " . $children . " </td></tr>
<tr><td>Comentarios:</td><td> " . $comments . " </td></tr><tr><td>Tipo de Servicio:</td>";

if($service_type == "banquete"){
  $message .= "<td> Banquete - " . $banquet_course . " tiempos";
}else if($service_type == "buffet"){
  $message .= "<td> Buffet - " . $buffet_type;
}else if($service_type == "otro"){
  $message .= "<td> Otro - " . $other_description;
}else{
  $message .= "<td> " . $service_type;
}
$message .= " </td></tr></table><div style='text-align: center;margin-top:10%;'><img src='https://www.victoriamg.it/paulasgourmet/assets/images/paulas_gourmet_catering.png' alt='Paulas Gourmet logo' style='width:150px;height:auto;'></div></body></html>";




$mailHeaders = 'MIME-Version: 1.0' . "\r\n";
$mailHeaders .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$mailHeaders .= $to_text;
$mailHeaders .= $from_text;
$mailHeaders .= 'X-Mailer: PHP/' . phpversion();

  if(mail($toEmails, $subject, $message ,$mailHeaders)) {
    $email_sent = true;
    print "<p class='alert alert-success'><i class='fas fa-check'></i><strong>&nbsp;¡Gracias!</strong>&nbsp;Tu mensaje ha sido enviado </p>";
} else {
  $email_sent = false;
    print "<small class='form-text alert alert-danger'><i class='fas fa-times'>&nbsp;Se ha presentado un problema, por favor intenta más tarde.</small>";
}
?>
