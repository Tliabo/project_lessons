<?php

use src\Form\InputField;
use src\Form\TextareaField;
use src\From\Form;

?>

    <h3 class="text-center">Seite Bearbeiten</h3>
<?php
$form = Form::begin('', 'post'); ?>
    <div class="row">
        <div class="col-1">
            <button class="btn btn-outline-primary" type="submit">Speichern</button>
        </div>
        <div class="col">
            <?= new InputField($this, 'title', ' disabled') ?>
            <?= new TextareaField($this, 'contend', 'editor1') ?>
        </div>
    </div>
<?php
Form::end(); ?>
