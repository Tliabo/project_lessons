<?php


use src\Form;

?>

<h2>Login</h2>

<?php

$form = Form::begin('', 'post') ?>

<?= $form->field($this, 'username') ?>
<?= $form->field($this, 'password')->passwordField() ?>
<button class="btn btn-primary" type="submit">Einloggen</button>

<?php
Form::end();
?>
