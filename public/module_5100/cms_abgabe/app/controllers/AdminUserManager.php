<?php


namespace App\Controllers;

use Database\AdminUserModel;
use src\Request;
use src\Response;
use src\Router;

/**
 *
 * @package App\Controllers
 */
class AdminUserManager extends Admin
{

    private AdminUserModel $adminUser;

    public function __construct()
    {
        $this->adminUser = new AdminUserModel();
        parent::__construct();
    }

    public function addAdminUser(Request $request)
    {
        $userModel = $this->adminUser;
        if ($request->isPost()) {
            $userModel->loadData($request->getBody());

            if ($userModel->validate() && $userModel->save()) {
                Router::$session->setFlash('success', 'Neuer Adminuser hinzugefügt');
                Response::redirect('/admin/usermanager');
                exit;
            }
        }
        $this->viewParams['contentPlaceholder'] = $userModel->getForm();
        return $this->render([
            'errors' => $userModel->errors
        ]);
    }
    public function showAdminUsers(Request $request) {
        Response::redirect('/admin/usermanager');
        exit;
    }

    public function render(array $params = [])
    {
        if (!isset($this->viewParams['contentPlaceholder'])) {
            ob_start();
            $this->viewParams['adminUsers'] = AdminUserModel::loadAdminUsers();

            include_once RESOURCE_DIR . '/views/admin/manager/partial/showAdminUsers.php';

            $this->viewParams['contentPlaceholder'] = ob_get_clean();
        }

        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/user.php';

        $this->viewParams['contend'] = ob_get_clean();
        return parent::render($params);
    }

}
