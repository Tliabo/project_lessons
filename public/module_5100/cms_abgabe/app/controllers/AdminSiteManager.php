<?php


namespace App\Controllers;


use Database\AktuellModel;
use Database\BiografieModel;
use Database\HomeModel;
use Database\SiteModel;
use src\Request;
use src\Response;
use src\Router;

/**
 * @package App\Controllers
 */
class AdminSiteManager extends Admin
{
    public SiteModel $siteModel;

    public function __construct()
    {
        parent::__construct();
    }

    public function editSite(Request $request)
    {
        $pageName = $request->params[0];
        $model = SiteModel::findOne(['title' => $pageName]);
        if ($request->isPost()) {
            $model->loadData($request->getBody(false));

            if ($model->update()) {
                Response::redirect('/admin/sitemanager');
            }

        }

        $this->viewParams['contend'] = $model->getForm();

        return $this->renderEditSite([
            'errors' => $model->errors
        ]);
    }

    public function renderEditSite(array $params = [])
    {
        $this->viewParams['afterFooter']['js'][] = ['src' => '/assets/js/ckeditor/ckeditor.js'];
        $this->viewParams['afterFooter']['js'][] = ['src' => '/assets/js/siteEditor.js'];

        return $this->render($params);
    }

    public function renderManager(array $params = [])
    {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/site.php';

        $this->viewParams['contend'] = ob_get_clean();
        return $this->render($params);
    }

    public function render(array $params = [])
    {
        return parent::render($params);
    }

}
