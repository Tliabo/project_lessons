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
Router::get('galerie/Collagen', [SiteController::class, 'galerie']);
Router::get('galerie/Aquarell', [SiteController::class, 'galerie']);
Router::get('galerie/Absprengtechnik', [SiteController::class, 'galerie']);
Router::get('galerie/Mischtechnik', [SiteController::class, 'galerie']);
Router::get('biografie', [SiteController::class, 'biografie']);

/**
 * Admin sites
 */

Router::get('register', [AuthController::class, 'register']);
Router::post('register', [AuthController::class, 'register']);
Router::get('login', [AuthController::class, 'login']);
Router::post('login', [AuthController::class, 'login']);
