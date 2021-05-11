<?php
require_once('config.php');
require_once('mysql-connect.php');


// Befehl erstellen
$query = "DELETE FROM `produkt` WHERE `IDprodukt` = 3";

// Befehl senden
$res = mysqli_query($connection, $query);


// Prüfen und Ausgabe vorbereiten
if($res == false){
	$errormsg = 'Konnte das Produkt nicht löschen';
	if(SQLDEBUG == true){
		$errormsg .= '<br>MySQL Server meldet: '.mysqli_error($connection);
	} 
}else{
	$successmsg = 'Wurde gelöscht, falls es existiert hat';
}



// Ausgabe
echo isset($errormsg) ? '<div style="color:red;">'.$errormsg.'</div>' : ''; 
echo isset($successmsg) ? '<div style="color:green;">'.$successmsg.'</div>' 	: ''; 
?>