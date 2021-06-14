<?php

use function src\renderScripts;
use function src\renderLinks;

?>
<!DOCTYPE html>
<html lang="<?= $head['lang'] ?>">
<head>
    <meta charset="<?= $head['charset'] ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $head['title'] ?></title>
    <?= renderLinks($head['links']); ?>
    <?= renderScripts($head['scripts']); ?>
</head>
<?php
include_once RESOURCE_DIR . '/templates/header.tpl.php';
?>
<body>

<main class="container-fluid">
    <?= $contend ?>
</main>
<?php
include_once RESOURCE_DIR . '/templates/footer.tpl.php';
?>

<?= renderScripts($afterFooter['js']); ?>
</body>
</html>
