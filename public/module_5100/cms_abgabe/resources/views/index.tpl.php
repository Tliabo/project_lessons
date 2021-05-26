<?php

$contend = '';
$head['title'] = '';
$head['charset'] = 'UTF-8';
$head['lang'] = 'de';
$head['links'] = '';
$scripts[] = '';
?>

<!DOCTYPE html>
<html lang="<?= $head['title'] ?>">
<head>
  <meta charset="<?= $head['charset'] ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $head['title'] ?></title>
  <?= $head['links'] ?>
</head>
<body>
<?= $contend ?>
<?= $scripts ?>
</body>
</html>