<?php

namespace src;

use App\Controllers\SiteController;

class Router
{
    public static Request $request;
    protected static array $routes = [];

    private function __construct()
    {
    }

    public static function set(Request $request)
    {
        self::$request = $request;
    }

    public static function get($path, $callback)
    {
        self::$routes['get'][$path] = $callback;
    }

    public static function post($path, $callback)
    {
        self::$routes['post'][$path] = $callback;
    }

    public static function resolve()
    {
        $path = self::$request->controller;
        $method = self::$request->getMethod();

        $callback = self::$routes[$method][$path] ?? false;

        /**
         * If no site is found return 404 error view
         */
        if (!$callback) {
            Response::setStatusCode(404);
            $controller = new SiteController();
            return $controller->errorCode(404);
        }

        return call_user_func($callback);
    }

}
