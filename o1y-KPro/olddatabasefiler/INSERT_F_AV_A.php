<?php
if(isset($_POST["leggtil"])) 
{
 
    include 'dbconfig.php';

 
 $sql = "INSERT INTO artikkel_has_Forfatter(forfatter_id, artikkel_id) VALUES
('$ForfatterId', '$ArtikkelId')";
 if($kobling->query($sql)) {
 echo "Spørringen $sql ble gjennomført.";
 header('Location: oversikt.php');
 } else {
 echo "Noe gikk galt med spørringen $sql ($kobling->error).";
 }
 
}
?>

