<?php

use App\Controllers\SiteController;
use src\Router;

$siteController = new SiteController();

Router::get('/', [$siteController, 'home']);
Router::get('contact', [$siteController, 'contact']);
Router::post('contact', [$siteController, 'handleContact']);
