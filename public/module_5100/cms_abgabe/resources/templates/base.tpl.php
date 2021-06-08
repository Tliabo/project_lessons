<!DOCTYPE html>
<html lang="<?= $head['lang'] ?>">
<head>
    <meta charset="<?= $head['charset'] ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $head['title'] ?></title>
    <?php
    foreach ($head['links'] as $link): ?>
        <link rel="stylesheet" href="<?= $link ?>">
    <?php
    endforeach;
    ?>
    <script src="https://kit.fontawesome.com/f1e04c054c.js" crossorigin="anonymous"></script>
</head>
<?php
include_once RESOURCE_DIR . '/templates/header.tpl.php';
?>
<body>

<main>
    <?= $contend ?>
</main>
<?php
include_once RESOURCE_DIR . '/templates/footer.tpl.php';
foreach ($afterFooter as $js):
    ?>
<script src="<?= $js ?>"></script>
<?php
endforeach;
?>
</body>
</html>
