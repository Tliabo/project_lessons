<?php


namespace App\Controllers;

use Database\AdminUser;
use src\Request;
use src\Response;
use src\Router;

/**
 *
 * @package App\Controllers
 */
class AdminUserManager extends Admin
{

    public function addAdminUser(Request $request)
    {
        $user = new AdminUser();
        if ($request->isPost()) {
            $user->loadData($request->getBody());

            if ($user->validate() && $user->save()) {
                Router::$session->setFlash('success', 'Neue Adminuser hinzugefügt');
                Response::redirect('/admin/usermanager');
                exit;
            }
        }

        $this->viewParams['contend'] = $user->getForm();
        return $this->render([
            'errors' => $user->errors
        ]);
    }

    public function render(array $params = [])
    {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/user.php';

        $this->viewParams['contend'] = ob_get_clean();
        return parent::render($params);
    }

}
