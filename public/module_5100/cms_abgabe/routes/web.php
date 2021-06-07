<?php

use App\Controllers\HomeController;
use App\Controllers\SiteController;
use Database\BaseModel;
use src\Controller;
use src\Router;

$siteController = new SiteController();

Router::get('/', [$siteController, 'home']);
Router::get('contact', [$siteController, 'contact']);
Router::post('contact', [$siteController, 'handleContact']);
