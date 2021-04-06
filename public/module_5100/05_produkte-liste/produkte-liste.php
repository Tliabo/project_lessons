<?php

$produkte = [
  ["name" => "White Chocolate", "bild" => "cupcake-white-choco.png", "preis" => "5.90"],
  ["name" => "Erdbeer", "bild" => "cupcake-erdbeer.png", "preis" => "6.50"]
];
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
  <div class="uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-6@l uk-grid-medium uk-grid-match uk-grid"
       uk-grid>

      <?php

      foreach ($produkte as $produkt) { ?>
        <div>
          <div class="el-item uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle uk-display-block">
            <div class="uk-card-media-top">
              <img class="el-image" alt="" uk-img="" src="bilder/<?= $produkt["bild"] ?>">
            </div>
            <div class="uk-card-body">
              <h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom"><?= $produkt["name"]; ?></h3>
              <div class="uk-text-large uk-margin-bottom">CHF <?= $produkt["preis"]; ?></div>
              <a class="uk-button uk-button-secondary"><span class="icon-cart"></span> kaufen</a>
            </div>
          </div>
        </div>
          <?php
      } ?>

  </div>
</section>
</body>
</html>