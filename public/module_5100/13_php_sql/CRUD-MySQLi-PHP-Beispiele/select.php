<?php
require_once('config.php');
require_once('mysql-connect.php');


// Befehl zusammenstellen
$query = "SELECT * FROM `produkt`";

// Befehl senden
$res = mysqli_query($connection, $query);

// Prüfen
if($res == false){
	$errormsg = 'Abfrage fehlgeschlagen';
}

$daten = mysqli_fetch_all($res, MYSQLI_ASSOC);


// Daten verarbeiten 
?>
<!DOCTYPE html>
<html lang="en-gb" dir="ltr" vocab="http://schema.org/">
<head>
	<title>Cupcake Shop</title>
	<meta name="description" content="Webshop Projekt der Klasse WDD320">
	<link href="https://training.bytekultur.net/WDD-shopmaster/css/theme.css" rel="stylesheet" />
	<link href="https://training.bytekultur.net/WDD-shopmaster/css/custom.css" rel="stylesheet" />
</head>
<body>
	<!-- produkte liste -->
	<section class="uk-section-muted uk-padding ">
		<div class="uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-6@l uk-grid-medium uk-grid-match uk-grid" uk-grid>
			
			
			
			<?php foreach($daten as $produkt){ // foreach schreibt in jedem Loop-Durchgang ein Unter-Array von $produkte in die Variable $produkt ?>
			<div>
				<div class="el-item uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle uk-display-block">
					<div class="uk-card-media-top">
					</div>
						<img class="el-image" alt="" uk-img="" src="bilder/<?php echo $produkt['produkt_bild']; ?>">
					<div class="uk-card-body">
						<h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom"><?php echo $produkt['produkt_name']; ?></h3>        
						<div class="uk-text-large uk-margin-bottom">CHF <?php echo $produkt['produkt_preis']; ?></div>
						<a class="uk-button uk-button-secondary">kaufen</a>
					</div>
				</div>				
			</div>
			<?php } ?>
			
		</div>
	</section>
</body>
</html>