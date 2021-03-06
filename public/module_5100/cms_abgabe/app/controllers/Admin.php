<?php


namespace App\Controllers;

use Database\AdminUserModel;
use Database\LoginModel;
use http\Client\Curl\User;
use src\Controller;
use src\Request;
use src\Response;
use src\Router;
use src\Session;

/**
 * Handles admin space
 * Class AdminController
 * @package App\Controllers
 */
class Admin extends Controller
{
    public function __construct()
    {
        if (Router::$session->get('user')) {
            AdminUserModel::$user = AdminUserModel::findOne(['rowid' => Router::$session->get('user')]);
        }
        $this->viewParams['head']['links'] = [
            ['href' => '/assets/css/admincore.css']
        ];
    }

    public function admin(Request $request)
    {
        $action = $request->action;

        if (!AdminUserModel::isGuest()) {
            // execute action only for logged in users
            if ($action && $action !== 'login' && method_exists($this, $action)) {
                return $this->{$action}($request);
            } else {
                Response::redirect('/admin/dashboard');
            }
        }

        return $this->login($request);
    }

    public function login(Request $request)
    {
        $loginModel = new LoginModel();
        if ($request->isPost()) {
            var_dump($request->getBody());
            $loginModel->loadData($request->getBody());
            if ($loginModel->validate() && $loginModel->login()) {
                $this->saveUserToSession($request, AdminUserModel::$user);
                Response::redirect('/admin/dashboard');
            }
        }
        $this->viewParams['contend'] = $loginModel->getContend();
        return $this->render();
    }

    public function logout(Request $request)
    {
        AdminUserModel::$user = null;
        Router::$session->remove('user');
        Response::redirect('/admin');
    }

    public function dashboard(Request $request)
    {
        ob_start();
        include RESOURCE_DIR . '/views/admin/dashboard.php';
        $this->viewParams['contend'] = ob_get_clean();
        return $this->render();
    }

    public function sitemanager(Request $request)
    {
        $manager = new AdminSiteManager();

        if ($request->params[0] ?? false) {
            return $manager->editSite($request);
        } else {
            return $manager->renderManager();
        }
    }

    public function gallerymanager(Request $request)
    {
        $manager = new AdminGalleryManager();

        switch ($request->params[0] ?? false) {
            case 'uploadImage':
                return $manager->uploadImage($request, $_FILES['name'] ?? null);
            case 'addCategory':
                return $manager->addCategory($request);
            default:
                return $manager->render();
        }
    }

    public function usermanager(Request $request)
    {
        $manager = new AdminUserManager();

        switch ($request->params[0] ?? false) {
            case 'addAdminUser':
                return $manager->addAdminUser($request);
            default:
                return $manager->render();
        }
    }

    public function render(array $params = [])
    {
        $params = array_merge($this->viewParams, $params);
        ob_start();
        extract($params);
        include_once RESOURCE_DIR . "/templates/admin/admin.tpl.php";
        return ob_get_clean();
    }

    private function saveUserToSession(Request $request, AdminUserModel $user)
    {
        $primaryKey = $user->primaryKey();
        $primaryValue = $user->{$primaryKey};
        Router::$session->set('user', $primaryValue);
    }
}
