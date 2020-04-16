<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$record_added = false;
$email_sent = false;
include("record_submission.php");
include("mail_setup.php");
include("send_mail.php");

if (!$record_added){
  error_log("Record not added to database! ". $message, 1, $admin_email, 'Content-type: text/html; charset=UTF-8');
}

if (!$email_sent){
  error_log("Email not sent! ". $message, 1, $admin_email, 'Content-type: text/html; charset=UTF-8');
}

 ?>
