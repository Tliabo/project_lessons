<?php


namespace App\Controllers;

use Database\LoginModel;
use src\Controller;
use src\Request;
use src\Response;

/**
 *
 * Router::get('galerie/Collagen', [SiteController::class, 'galerie']);
 * Router::get('galerie/Aquarell', [SiteController::class, 'galerie']);
 * Router::get('galerie/Absprengtechnik', [SiteController::class, 'galerie']);
 * Router::get('galerie/Mischtechnik', [SiteController::class, 'galerie']);
 * Class GalerieController
 * @package App\Controllers
 */
class Galerie extends Controller
{
    public function galerie(Request $request)
    {
        $action = $request->action;
        if ($action && method_exists($this, $action)) {
            // execute action
            return $this->{$action}($request);
        } elseif ($action) {
            Response::redirect('/admin');
        }
        return $this->render();
    }

    public function collagen(Request $request)
    {
    }

    public function aquarell(Request $request)
    {
    }

    public function absprengtechnik(Request $request)
    {
    }

    public function mischtechnik(Request $request)
    {
    }
}
