<?php

namespace App\Controllers;

use Database\LoginModel;
use Database\AdminUser;
use src\Controller;
use src\Request;
use src\Response;
use src\Router;

class Auth extends Controller
{

    public function register(Request $request)
    {
        $user = new AdminUser();
        if ($request->isPost()) {
            $user->loadData($request->getBody());

            if ($user->validate() && $user->save()) {
                Router::$session->setFlash('success', 'Erfolgreich Registriert');
                Response::redirect('/register');
                exit;
            }
        }

        $this->viewParams['contend'] = $user->getContend();
        return $this->render([
            'errors' => $user->errors
        ]);
    }

}