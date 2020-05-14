<?php

if($_POST["submit"]) {
  $recipient="curtishumphrey1@gmail.com";
  $subject="contact message from Portfolio";
  $sender=$_POST["email"];
  $message=$_POST["message"];

  mail($recipient, $subject, $_POST["message"], "From: $sender");
}

include_once("index.html");
