<?php

use src\Request;
use src\Router;

/*
 * Load all classes and needed files
 */
$app = require __DIR__ . '/../bootstrap/app.php';

/*
 * Handle requests
*/
$request = new Request();
Router::set($request);

require ROUTES_DIR . "/web.php";

echo Router::resolve();
