﻿<?php

setlocale(LC_ALL, 'de_CH');

?>

<html>
<head>
  <title>MINI KALENDER</title>
</head>
<body>

<h3 style="color:#999999;">MINI KALENDER</h3>
<div style="border:1px solid black;border-top:5px solid #000000; width:200px; height:250px;text-align:center;">
  <h2><?= strftime('%A') ?></h2>

  <span style="font-size:100px;font-weight:bold;"><?= strftime('%e') ?></span>

  <h2><?= strftime('%B %Y') ?></h2>
</div>

</body>
</html>