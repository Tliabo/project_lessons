<?php

namespace App\Controllers;

use Database\LoginModel;
use Database\AdminUserModel;
use src\Controller;
use src\Request;
use src\Response;
use src\Router;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $loginModel = new LoginModel();
        if ($request->isPost()) {
            $loginModel->loadData($request->getBody());
            if ($loginModel->validate() && $loginModel->login()) {
                Response::redirect('/');
            }
        }
        $this->viewParams['contend'] = $loginModel->getContend();
        return $this->render();
    }

    public function register(Request $request)
    {
        $user = new AdminUserModel();
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
