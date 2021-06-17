<?php

/**
 * Here you can define routes for different views or requests.
 *
 * Router::Method(path, [ControllerClass, ControllerAction])
 * Method: get, post
 * ControllerClass: see app/controllers
 * ControllerAction: function name in ControllerClass
 */

use App\Controllers\AdminController;
use App\Controllers\AuthController;
use App\Controllers\SiteController;
use src\Router;

/**
 * Public sites
 */

Router::get('/', [SiteController::class, 'home']);
Router::get('aktuell', [SiteController::class, 'aktuell']);
Router::get('galerie', [SiteController::class, 'galerie']);
Router::get('biografie', [SiteController::class, 'biografie']);

Router::get('admin', [AdminController::class, 'admin']);
Router::post('admin', [AdminController::class, 'admin']);
