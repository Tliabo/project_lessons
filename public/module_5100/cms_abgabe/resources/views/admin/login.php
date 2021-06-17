<?php


use src\From\Form;
use src\Form\InputField;

?>

<h2>Login</h2>
<div class="row">
    <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <?php

        $form = Form::begin('', 'post') ?>

        <?= new InputField($this, 'email') ?>
        <?= new InputField($this, 'password', InputField::TYPE_PASSWORD) ?>
        <button class="btn btn-primary" type="submit">Einloggen</button>

        <?php
        Form::end();
        ?>

    </div>
</div>
