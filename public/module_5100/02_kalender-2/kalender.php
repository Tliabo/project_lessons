<?php

//var_dump($_GET['Sprachen']);

switch ($_GET['Sprachen']) {
    case 'deutsch':
        setlocale(LC_ALL, 'de_CH');
        break;
    case 'francais':
        setlocale(LC_ALL, 'fr_CH');
        break;
    case 'english':
        setlocale(LC_ALL, 'en_CH');
        break;
    default:
        setlocale(LC_ALL, 'de_CH');
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
<form action="kalender.php" method="GET">
  <label>
    <select name="Sprachen" id="sprachen">
      <option value="deutsch">Deutsch</option>
      <option value="francais">Francais</option>
      <option value="english">English</option>
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