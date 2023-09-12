<?php
if(isset($_POST["leggtil"])) 
{
 
    include 'dbconfig.php';
    // Lagrer skjemafeltene i enklere navn
    $Url = $_POST["Url"];
    $Tittel = $_POST["Tittel"];
    $Beskrivelse = $_POST["Beskrivelse"];
    $sql = "INSERT INTO artikkel (url, tittel, beskrivelse) VALUES ('$Url', '$Tittel','$Beskrivelse')";
 
    if($kobling->query($sql)) {
        $ArtikkelId = $kobling->insert_id;
    echo "Spørringen $sql ble gjennomført.";

    } else {
        echo "Noe gikk galt med spørringen $sql ($kobling->error).";
    }
 
 
}
?>