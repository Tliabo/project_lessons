<?php

$produkte = array(
	array( "name" => "White Chocolate", "bild" => "cupcake-white-choco.png", "preis" => "5.90"),
	array( "name" => "Erdbeer", "bild" => "cupcake-erdbeer.png", "preis" => "6.50")
);


// print_r gibt alle Ebenen eines Arrays aus (zum debuggen / visualisieren)
print_r($produkte);


?>
<div>
  <div class="el-item uk-card uk-card-default uk-card-small uk-card-hover uk-link-toggle uk-display-block">
    <div class="uk-card-media-top">
      <img class="el-image" alt="" uk-img="" src="images/produkte/<?php echo $produkte[0]["bild"] ?>">
    </div>
    <div class="uk-card-body">
      <h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom"><?php echo $produkte[0]["name"]; ?></h3>
      <div class="uk-text-large uk-margin-bottom">CHF <?php echo $produkte[0]["preis"]; ?></div>
      <a class="uk-button uk-button-secondary"><span class="icon-cart"></span> kaufen</a>
    </div>
  </div>
</div>