<?php

use Database\AdminUserModel;

use src\Router;

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
<body>
<?php
include_once RESOURCE_DIR . '/templates/admin/header.tpl.php';
?>

<main class="container-fluid">
    <?php
    if (Router::$session->getFlash('success')): ?>
    <div class="alert alert-success">
        <?= Router::$session->getFlash('success') ?>
    </div>
    <?php
    endif;
    ?>
    <?= $contend ?>
</main>
<?php
include_once RESOURCE_DIR . '/templates/admin/footer.tpl.php';
?>

<?= renderScripts($afterFooter['js']); ?>
</body>
</html>
