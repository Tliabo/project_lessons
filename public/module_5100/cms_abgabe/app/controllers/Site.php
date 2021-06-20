<?php


namespace App\Controllers;

use Database\AktuellModel;
use Database\BiografieModel;
use Database\ErrorCodeModel;
use Database\GalerieModel;
use Database\HomeModel;
use src\Controller;
use src\Database;
use src\Request;

/**
 * Handles the public sites
 * Class SiteController
 * @package App\Controllers
 */
class Site extends Controller
{
    protected GalerieModel $galerieModel;

    public function __construct()
    {
        $this->galerieModel = new GalerieModel();
        $this->viewParams['categories'] = $this->galerieModel->loadAllCategories();
    }

    /**
     * Loads the errorview with the specified error code
     * @param $code
     * @return false|string
     */
    public function errorCode($code)
    {
        $errorCodeModel = new ErrorCodeModel($code);
        $this->viewParams['head']['title'] = $errorCodeModel->getTitle();
        $this->viewParams['contend'] = $errorCodeModel->getContend();
        return $this->render();
    }

    /**
     * Loads the home view
     * @return false|string
     */
    public function home()
    {
        $homeModel = new HomeModel();
        $this->viewParams['head']['title'] = $homeModel->getTitle();
        $this->viewParams['head']['links'] = array_merge($this->viewParams['head']['links'],
            $homeModel->getStyleSheets());
        $this->viewParams['contend'] = $homeModel->getContend();
        $this->viewParams['afterFooter']['js'] = array_merge($this->viewParams['afterFooter']['js'],
            $homeModel->getJS());
        return $this->render();
    }

    /**
     * Loads the aktuell view
     * @return false|string
     */
    public function aktuell()
    {
        $aktuellModel = new AktuellModel();
        $this->viewParams['head']['title'] = $aktuellModel->getTitle();
        $this->viewParams['contend'] = $aktuellModel->getContend();
        $this->viewParams['pageTitle'] = $aktuellModel->pageTitle;
        return $this->render();
    }

    /**
     * Loads the galerie view and sub views
     * @return false|string
     */
    public function galerie(Request $request)
    {
        $galerieModel = $this->galerieModel;
        foreach ($galerieModel->loadAllCategories() as $category) {
            if ($category['name'] == $request->action) {
                $galerieModel->loadData($category);
            }
        }
        $this->viewParams['head']['title'] = $galerieModel->getTitle();
        $this->viewParams['pageTitle'] = $galerieModel->name;
        $this->viewParams['contend'] = $galerieModel->getTechnik();

        return $this->render();
    }

    /**
     * Loads the biografie view
     * @return false|string
     */
    public function biografie()
    {
        $biografieModel = new BiografieModel();
        $this->viewParams['head']['title'] = $biografieModel->getTitle();
        $this->viewParams['contend'] = $biografieModel->getContend();
        $this->viewParams['pageTitle'] = $biografieModel->pageTitle;
        return $this->render();
    }
}
