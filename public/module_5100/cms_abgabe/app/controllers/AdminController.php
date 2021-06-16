<?php


namespace App\Controllers;

use Database\LoginModel;
use src\Controller;
use src\Request;
use src\Response;

/**
 * Handles admin dashboard
 * Class AdminController
 * @package App\Controllers
 */
class AdminController extends Controller
{
    public function admin(Request $request)
    {
        var_dump($request);
        $action = $request->action;
        if ($action && method_exists($this, $action)) {
            // execute action
            return $this->{$action}($request);
        } elseif($action) {
            Response::redirect('/admin');
        }
        return $this->render();
    }

    public function login(Request $request)
    {
        $loginModel = new LoginModel();
        if ($request->isPost()) {
            $loginModel->loadData($request->getBody());
            if ($loginModel->validate() && $loginModel->login()) {
                Response::redirect('/admin/dashboard');
            }
        }
        $this->viewParams['contend'] = $loginModel->getContend();
        return $this->render();
    }

    public function dashboard()
    {

    }

    public function render(array $params = [])
    {
        $params = array_merge($this->viewParams, $params);
        ob_start();
        extract($params);
        include_once RESOURCE_DIR . "/templates/admin/admin.tpl.php";
        return ob_get_clean();
    }
}
