<?php

/*
 * Load all classes and needed files
 */
$app = require __DIR__ . '/../bootstrap/app.php';

/*
 * Handle requests
 * Request.php is autoloaded
*/
new Request();
require ROUTES_DIR . "/web.php";
