<?php

/**
 * Here you can define routes for different views or requests.
 *
 * Router::Method(path, [ControllerClass, ControllerAction])
 * Method: get, post
 * ControllerClass: see app/controllers
 * ControllerAction: function name in ControllerClass
 */

use App\Controllers\Admin;
use App\Controllers\Auth;
use App\Controllers\Site;
use src\Router;

/**
 * Public sites
 */

Router::get('/', [Site::class, 'home']);
Router::get('aktuell', [Site::class, 'aktuell']);
Router::get('galerie', [Site::class, 'galerie']);
Router::get('biografie', [Site::class, 'biografie']);

Router::get('admin', [Admin::class, 'admin']);
Router::post('admin', [Admin::class, 'admin']);
