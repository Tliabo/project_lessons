<?php
require_once('config.php');
require_once('mysql-connect.php');


// Befehl erstellen
$query = "INSERT INTO `produkt` 
(`IDprodukt`, `produkt_name`, `produkt_bild`, `produkt_preis`) 
VALUES 
(NULL, 'Erdbeer', 'cupcake-erdbeer.png', '6.50')";

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
	if(SQLDEBUG == true){
		$successmsg .= '<br>ID des neuen Produkts: '.mysqli_insert_id($connection);
	}
}



// Ausgabe
echo isset($errormsg) ? '<div style="color:red;">'.$errormsg.'</div>' : ''; 
echo isset($successmsg) ? '<div style="color:green;">'.$successmsg.'</div>' 	: ''; 
?>