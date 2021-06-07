<?php

namespace src;

class Controller
{
    public Model $model;


    public function __construct($model)
    {
        $this->model = $model;
    }

    public function render($view = 'base', $params)
    {

    }
}
