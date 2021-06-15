<?php

namespace src;

use App\Controllers\SiteController;

/**
 * Handles request.
 * its basically a static class in other programming languages. All variables
 * and functions have to be static too so that they can be called.
 * Class Router
 * @package src
 */
class Router
{
    public static Request $request;
    public static Session $session;
    protected static array $routes = [];

    /**
     * its private so that no new router can be instantiated
     * Router constructor.
     */
    private function __construct()
    {
    }

    /**
     * Connects the router with the request and session
     * @param Request $request
     * @param Session $session
     */
    public static function set(Request $request, Session $session)
    {
        self::$request = $request;
        self::$session = $session;
    }

    /**
     * saves the path and callback from the get request
     * @param $path
     * @param $callback
     */
    public static function get($path, $callback)
    {
        self::$routes['get'][$path] = $callback;
    }

    /**
     * saves the path and callback from the post request
     * @param $path
     * @param $callback
     */
    public static function post($path, $callback)
    {
        self::$routes['post'][$path] = $callback;
    }

    /**
     * resolve the request handling
     * @return false|mixed|string
     */
    public static function resolve()
    {
        $path = self::$request->controller;

        $method = self::$request->method();

        $callback = self::$routes[$method][$path] ?? false;

        /**
         * If no site is found return 404 error view
         */
        if (!$callback) {
            Response::setStatusCode(404);
            $controller = new SiteController();
            return $controller->errorCode(404);
        }

        /**
         * auto instantiate the controller classes
         */
        if (is_array($callback)) {
            $callback[0] = new $callback[0];
        }

        return call_user_func($callback, self::$request);
    }

}
