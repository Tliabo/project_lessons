<?php

namespace App\Controllers;

use Database\AdminNewUserModel;
use Database\LoginModel;
use Database\User;
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
        $user = new User();
        if ($request->isPost()) {
            $user->loadData($request->getBody());

            if ($user->validate() && $user->save()) {
                Router::$session->setFlash('success', 'Erfolgreich Registriert');
                Response::redirect('/register');
                exit;
            }
        }

        $registerModel = new AdminNewUserModel();
        if ($request->isPost()) {
            $registerModel->loadData($request->getBody());

            if ($registerModel->validate() && $registerModel->register()) {
                Router::$session->setFlash('success', 'Erfolgreich Registriert');
                Response::redirect('/register');
                exit;
            }
        }

        $this->viewParams['contend'] = $registerModel->getContend();
        return $this->render([
            'errors' => $registerModel->errors
        ]);
    }

}
