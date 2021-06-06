<?php

abstract class View
{
    protected Model $model;
    protected Controller $controller;
    public string $contend = '';
    public array $head = [
      'lang' => 'de',
      'charset' => 'UTF-8',
      'title' => '',
      'links' => ''
    ];

    public function __construct($controller, $model)
    {
        $this->controller = $controller;
        $this->model = $model;
    }

    public function render()
    {
        include_once RESOURCE_DIR . '/templates/base.tpl.php';
    }

}
