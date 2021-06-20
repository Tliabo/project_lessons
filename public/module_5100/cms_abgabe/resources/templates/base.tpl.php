<?php

use function src\renderScripts;
use function src\renderLinks;

?>
<!DOCTYPE html>
<html lang="<?= $head['lang'] ?? 'VP' ?>">
<head>
    <meta charset="<?= $head['charset'] ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $head['title'] ?></title>
    <?= renderLinks($head['links']); ?>
    <?= renderScripts($head['scripts']); ?>
</head>
<body>
<?php
include_once RESOURCE_DIR . '/templates/header.tpl.php';
?>

<main class="container-fluid">
    <?= $pageTitle ? "<h2 class=\"text-center mt-3\">$pageTitle</h2>" : '' ?>
    <?= $contend ?? '' ?>
</main>
<?php
include_once RESOURCE_DIR . '/templates/footer.tpl.php';
?>

<?= renderScripts($afterFooter['js']); ?>
</body>
</html>
