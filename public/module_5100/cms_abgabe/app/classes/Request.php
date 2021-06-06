<?php

/**
 * Get the url requested by the user and slice it in three parts.
 * 1. Controller
 * 2. Action
 * 3. Parameters
 */
class Request
{

    public $url;
    public $request;

    public function __construct()
    {
        $this->url = $_SERVER["REQUEST_URI"];
        $this->dispatch();
    }

    private function dispatch()
    {
        $explode_url = explode('/', $this->url);
        $explode_url = array_slice($explode_url, 2);

        $this->request->controller = $explode_url[0];
        $this->request->action = $explode_url[1];
        $this->request->params = array_slice($explode_url, 2);
    }
}
