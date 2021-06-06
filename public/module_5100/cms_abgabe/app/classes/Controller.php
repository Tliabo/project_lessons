<?php

abstract class Controller
{
    protected Model $model;

    public function __construct($model)
    {
        $this->model = $model;
    }
}
