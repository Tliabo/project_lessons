<?php


namespace App\Controllers;


use Database\SiteModel;
use src\Request;
use src\Response;
use src\Router;

/**
 * @package App\Controllers
 */
class AdminSiteManager extends Admin
{

    public function addSite(Request $request)
    {
        $model = new SiteModel();
        if ($request->isPost()) {
            $model->loadData($request->getBody());

            if ($model->validate() && $model->save()) {
                Router::$session->setFlash('success', 'Neue Kategorie hinzugefügt');
                Response::redirect('/admin/gallerymanager');
                exit;
            }
        }

        $this->viewParams['contend'] = $model->getForm();
        return $this->render([
            'errors' => $model->errors
        ]);
    }

    public function render(array $params = [])
    {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/site.php';

        $this->viewParams['contend'] = ob_get_clean();
        return parent::render($params);
    }

}
