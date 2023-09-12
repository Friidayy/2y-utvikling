<?php
include 'dbconfig.php';

$sql = "SELECT artikkel_id, forfatter_id, tittel, url, beskrivelse, fornavn, etternavn FROM artikkel 
left join artikkel_has_forfatter on artikkel_has_forfatter.artikkel_id = artikkel.id
left join forfatter on artikkel_has_forfatter.forfatter_id = forfatter.id";

$resultat = $kobling->query($sql);
echo "<table>"; // Starter tabellen
echo "<tr>"; // Lager en rad med overskrifter
echo "<th>Tittel</th>";
 echo "<th>Beskrivelse</th>"; 
 echo "<th>url</th>";
 echo "<th>Fornavn</th>";
 echo "<th>Etternavn</th>";
 echo "<th>Forfatter ID</th>";
 echo "<th>Artikkel ID</th>";
 
 
echo "</tr>";
while($rad = $resultat->fetch_assoc()) {
 $Tittel= $rad["tittel"];
 $ForfatterID = $rad["forfatter_id"];
 $Fornavn = $rad["fornavn"];
 $Etternavn = $rad["Etternavn"];
 $ArtikkelID = $rad["artikkel_id"];
 $URL = $rad["url"];
 $Beskrivelse = $rad["beskrivelse"];
 
 echo "<tr>";
 echo "<td>$Tittel</td>"; 
 echo "<td>$Beskrivelse</td>";

 echo "<td>$url</td>";
 echo "<td>$Fornavn</td>";
 echo "<td>$Etternavn</td>";

 echo "<td>$ArtikkelID</td>";
 echo "<td>$ForfatterID</td>";
 
 echo "</tr>";
}
echo "</table>"; // Avslutter tabellen
?>

<a href="./database.php">Sett inn nye artikler/nettkilder</a>