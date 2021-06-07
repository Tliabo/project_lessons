<?php

namespace src;

/**
 * Get the url requested by the user and slice it in three parts.
 * 1. Controller
 * 2. Action
 * 3. Parameters
 */
class Request
{
    private $url;
    public $controller;
    public $action;
    public $params;

    public function __construct()
    {
        $this->url = $_SERVER["REQUEST_URI"] ?? '/';
        $this->dispatch();
    }

    private function dispatch()
    {
        $explode_url = explode('/', $this->url);
        $explode_url = array_slice($explode_url, 1);

        // The first element should be a controller
        $this->controller = $explode_url[0] == '' ? '/' : $explode_url[0];

        // If a second element is added in the URL, it should be a Action
        $this->action = $explode_url[1] ?? '';

        // The remaining parts are parameters that are given to the action method
        $this->params = array_slice($explode_url, 2);
    }

    public function getMethod() {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }
}
