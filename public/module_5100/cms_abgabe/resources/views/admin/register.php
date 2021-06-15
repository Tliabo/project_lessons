<?php

use src\Form;
use src\Router;

?>

<?php
if (Router::$session->getFlash('success')): ?>
    <div class="alert alert-success">
        <?= Router::$session->getFlash('success') ?>
    </div>
<?php
endif; ?>

<h2>Registrieren</h2>

<?php

$form = Form::begin('', 'post') ?>

<div class="row">
    <div class="col"><?= $form->field($this, 'firstname') ?></div>
    <div class="col"><?= $form->field($this, 'lastname') ?></div>
</div>
<?= $form->field($this, 'email') ?>
<?= $form->field($this, 'password')->passwordField() ?>
<?= $form->field($this, 'passwordConfirm')->passwordField() ?>
<button class="btn btn-primary" type="submit">Registrieren</button>

<?php
Form::end();
?>
