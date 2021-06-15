<?php

use src\Request;
use src\Router;
use src\Session;

/**
 * Autoloads classes and needed files
 */
$app = require __DIR__ . '/../bootstrap/app.php';

/**
 * Handle requests
 */
$request = new Request();

/**
 * Handle Session
 */
$session = new Session();

Router::set($request, $session);

/**
 * Specify the routs
 */
require ROUTES_DIR . "/web.php";


/**
 * Resolve request
 */
echo Router::resolve();
