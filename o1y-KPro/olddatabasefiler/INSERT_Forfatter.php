<?php
if(isset($_POST["leggtil"])) 
{
 
 include 'dbconfig.php';
 
 $FF = $_POST["Fornavn"];
 $FE = $_POST["Etternavn"];
 
 
 $sql = "INSERT INTO Forfatter (Fornavn, Etternavn)  VALUES ('$FF', '$FE')";
 
 if( $kobling->query($sql)) {
    $ForfatterId = $kobling->insert_id;
 echo "Spørringen $sql ble gjennomført. Forfatterid = $forfatterId ";
 } else {
 echo "Noe gikk galt med spørringen $sql ($kobling->error).";
 }
 
 
}
?>
