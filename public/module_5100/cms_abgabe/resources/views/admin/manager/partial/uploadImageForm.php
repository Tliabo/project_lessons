<?php

use src\Form\InputField;
use src\From\Form;

$form = Form::begin('', 'post');
?>

<?= new InputField($this, 'name', InputField::TYPE_FILE); ?>
<button class="btn btn-outline-primary" type="submit">Bild hochladen</button>

<?php
Form::end();
?>
