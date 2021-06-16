<?php


use src\From\Form;
use src\Form\InputField;

?>

<h2>Login</h2>

<?php

$form = Form::begin('', 'post') ?>

<?= new InputField($this, 'email') ?>
<?= new InputField($this, 'password', InputField::TYPE_PASSWORD) ?>
<button class="btn btn-primary" type="submit">Einloggen</button>

<?php
Form::end();
?>
