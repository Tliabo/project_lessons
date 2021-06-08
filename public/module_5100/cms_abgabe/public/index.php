<?php

use src\Request;
use src\Router;

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
 * Specify the routs
 */
require ROUTES_DIR . "/web.php";

/**
 * Resolve request
 */
echo Router::resolve();
