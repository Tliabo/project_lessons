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
Router::set($request);

/**
 * Handle Session
 */
$session = new Session();

/**
 * Specify the routs
 */
require ROUTES_DIR . "/web.php";


/**
 * Resolve request
 */
echo Router::resolve();
