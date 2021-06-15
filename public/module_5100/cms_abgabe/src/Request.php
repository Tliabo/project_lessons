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

    /**
     * Splits the url in the needed parts
     */
    private function dispatch()
    {
        $explode_url = explode('/', $this->url);

        $explode_url = array_slice($explode_url, 1);

        // The first element will be the controller
        $this->controller = $explode_url[0] == '' ? '/' : $explode_url[0];

        // If a second element is added in the URL, it will be the Action
        $this->action = $explode_url[1] ?? '';

        // The remaining parts are parameters that are given to the action method
        $this->params = array_slice($explode_url, 2);
    }

    /**
     * returns the request method
     * @return string
     */
    public function method(): string
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    /**
     * returns the sanitized request body
     * @return array|null
     */
    public function getBody(): ?array
    {
        if ($this->isGet()) {
            return $this->sanitizeMethod($_GET);
        } elseif ($this->isPost()) {
            return $this->sanitizeMethod($_POST);
        }
        return null;
    }

    private function sanitizeMethod($method): array
    {
        $body = [];
        foreach ($method as $key => $value) {
            $body[$key] = sanitize($value);
        }
        return $body;
    }

    public function isGet(): bool
    {
        return $this->method() === 'get';
    }

    public function isPost(): bool
    {
        return $this->method() === 'post';
    }
}
