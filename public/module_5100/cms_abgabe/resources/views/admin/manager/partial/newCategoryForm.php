<?php

use src\Form\InputField;
use src\From\Form;


$form = Form::begin('', 'post');
?>
<?= new InputField($this, 'name'); ?>
<button class="btn btn-outline-primary" type="submit">Kategorie hinzufügen</button>
<?php
Form::end(); ?>
