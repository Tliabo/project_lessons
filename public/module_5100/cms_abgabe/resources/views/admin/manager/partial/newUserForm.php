<?php

use src\From\Form;
use src\Form\InputField;
use src\Router;

?>

<h2 class="text-center mt-2">Neuer Benutzer hinzufügen</h2>

<?php

$form = Form::begin('', 'post') ?>

<div class="row">
    <div class="col"><?= new InputField($this, 'firstname') ?></div>
    <div class="col"><?= new InputField($this, 'lastname') ?></div>
</div>
<?= new InputField($this, 'email') ?>
<?= new InputField($this, 'password', InputField::TYPE_PASSWORD) ?>
<?= new InputField($this, 'passwordConfirm', InputField::TYPE_PASSWORD) ?>
<button class="btn btn-primary" type="submit">Registrieren</button>

<?php
Form::end();
?>
