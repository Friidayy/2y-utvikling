<?php

 $tjener = "localhost";
 $brukernavn = "root";
 $passord = "root";
 $database = "artikkeldb";
 // Opprette en kobling
 $kobling = new mysqli($tjener, $brukernavn, $passord, $database);
  //Angi UTF-8 som tegnsett
$kobling->set_charset("utf8");
 if ($kobling->connect_error) {
    die("Noe gikk galt: " . $kobling->connect_error);
}
else {
  //echo "Koblingen virker"
  ; 
}
?>