<?php

$sprache = 'de';

if (isset($_GET['sprache'])) {
    $sprache = $_GET['sprache'];
    var_dump($sprache);
}

var_dump($_COOKIE);

switch ($sprache) {
    case 'de':
        setlocale(LC_ALL, 'de_CH', 'de');
        break;
    case 'fr':
        setlocale(LC_ALL, 'fr_CH', 'fr');
        break;
    case 'en':
        setlocale(LC_ALL, 'en_CH', 'en');
        break;
}

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
<form method="GET">
  <label>
    <select name="sprache" id="sprachen">
      <option value="de">Deutsch</option>
      <option value="fr">Francais</option>
      <option value="en">English</option>
    </select>
  </label>
</form>

<script>
    let dropdown = document.querySelector('#sprachen');

    dropdown.addEventListener('change', function () {
        this.form.submit();
    });

</script>

</body>
</html>