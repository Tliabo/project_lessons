<?php
require_once('config.php');
require_once('mysql-connect.php');


// Befehl erstellen
$query = "UPDATE `produkt` 
SET `produkt_name` = 'Aktion: Erdbeer Cupcakes!!!', `produkt_preis` = '4.50'
WHERE `IDprodukt` = 4";

// Befehl senden
$res = mysqli_query($connection, $query);


// Prüfen und Ausgabe vorbereiten
if($res == false){
	$errormsg = 'Konnte die Daten nicht speichern';
	if(SQLDEBUG == true){
		$errormsg .= '<br>MySQL Server meldet: '.mysqli_error($connection);
	} 
}else{
	$successmsg = 'Wurde gespeichert';
}



// Ausgabe
echo isset($errormsg) ? '<div style="color:red;">'.$errormsg.'</div>' : ''; 
echo isset($successmsg) ? '<div style="color:green;">'.$successmsg.'</div>' 	: ''; 
?>