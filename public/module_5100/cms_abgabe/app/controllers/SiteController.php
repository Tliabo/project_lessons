<?php


namespace App\Controllers;

use Database\AktuellModel;
use Database\BiografieModel;
use Database\ErrorCodeModel;
use Database\GalerieModel;
use Database\HomeModel;
use src\Controller;

/**
 * Handles the public sites
 * Class SiteController
 * @package App\Controllers
 */
class SiteController extends Controller
{
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
        $this->viewParams['contend'] = $homeModel->getContend();
        $this->viewParams['afterFooter'] = $homeModel->getJS();
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
        return $this->render();
    }

    /**
     * Loads the galerie view and sub views
     * @return false|string
     */
    public function galerie()
    {
        $galerieModel = new GalerieModel();
        $this->viewParams['head']['title'] = $galerieModel->getTitle();
        $this->viewParams['contend'] = $galerieModel->getContend();
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
        return $this->render();
    }
}
