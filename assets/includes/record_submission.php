<?php
require_once "config.php";
$event_datetime = date("Y-m-d H:i");
include("form_variables.php");
//$dateformat = "d/m/Y H:i";
//$dateobj =  date_create_from_format($dateformat, $event_datetime);
//$dateobj = $dateobj->format('Y-m-d H:i');

$event_datetime = $event_date . " " . $event_time;

$sql = "INSERT INTO request_submissions (name, email, phone, event_type, event_datetime, service_type, buffet_type, other_description, banquet_course, comments, adults, children) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

if($stmt = mysqli_prepare($link, $sql)){
  // Bind variables to the prepared statement as parameters
  mysqli_stmt_bind_param($stmt, "ssssssssssss", $param_name, $param_email, $param_phone, $param_event_type, $param_event_datetime, $param_service_type, $param_buffet_type, $param_other_description, $param_banquet_course, $param_comments, $param_adults, $param_children);
  // Set parameters
  $param_name = $name;
  $param_email = $email;
  $param_phone = $phone;
  $param_event_type = $event_type;
  $param_event_datetime = $event_datetime;
  $param_service_type = $service_type;
  $param_buffet_type = $buffet_type;
  $param_other_description = $other_description;
  if($service_type !== "banquete"){
    $param_banquet_course = "0";
  }else {
    $param_banquet_course = $banquet_course;
  }
  $param_comments = $comments;
  $param_adults = $adults;
  $param_children = $children;


  // Attempt to execute the prepared statement
  if(mysqli_stmt_execute($stmt)){
      // Set variable to true
      $record_added = true;
  }else {
    $record_added = false;
  }
  // Close statement
  mysqli_stmt_close($stmt);
  }
mysqli_close($link);


 ?>
