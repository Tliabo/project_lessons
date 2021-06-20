<?php

use src\Form\InputField;
use src\From\Form;
?>

<h3 class="text-center">Seite Bearbeiten</h3>
<?php
$form = Form::begin('', 'post'); ?>

<?= new InputField($this, 'title') ?>

<?php
Form::end(); ?>
