<?php

namespace App\Controllers;

use Database\AdminNewUserModel;
use Database\LoginModel;
use src\Controller;
use src\Request;
use src\Response;

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
        $registerModel = new AdminNewUserModel();
        if ($request->isPost()) {
            $registerModel->loadData($request->getBody());
            if ($registerModel->validate() && $registerModel->register()) {
                return 'Success';
            }
        }

        $this->viewParams['contend'] = $registerModel->getContend();
        return $this->render([
            'errors' => $registerModel->errors
        ]);
    }

}
