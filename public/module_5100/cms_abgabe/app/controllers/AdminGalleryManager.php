<?php


namespace App\Controllers;

use Database\AdminImageModel;
use Database\AktuellModel;
use Database\BiografieModel;
use Database\AdminCategoryModel;
use Database\ErrorCodeModel;
use Database\GalerieModel;
use Database\HomeModel;
use src\Controller;
use src\Request;
use src\Response;
use src\Router;

/**
 * @package App\Controllers
 */
class AdminGalleryManager extends Admin
{

    public $controls = [
        [
            'name' => 'Add Category',
            'target' => [
                'id' => 'addCategory',
                'type' => 'modal',
                'content' => ''
            ]
        ],
        [
            'name' => 'Upload Image',
            'target' => [
                'id' => 'uploadImage',
                'type' => 'modal',
                'content' => ''
            ]
        ],
        // commented out for future
        //        [
        //            'name' => 'Edit Image',
        //            'target' => [
        //                'id' => 'editImages',
        //                'type' => 'modal',
        //                'content' => ''
        //            ]
        //        ]
    ];

    private AdminCategoryModel $categoryModel;
    private AdminImageModel $imageModel;

    public function __construct()
    {
        $this->categoryModel = new AdminCategoryModel();
        $this->imageModel = new AdminImageModel();
        $this->controls[0]['target']['content'] = $this->categoryModel->getCategoryForm();
        $this->controls[1]['target']['content'] = $this->imageModel->getUploadImageForm();
//        $this->controls[2]['target']['content'] = '';

        parent::__construct();
    }

    public function addCategory(Request $request)
    {
        $categoryModel = $this->categoryModel;
        if ($request->isPost()) {
            $categoryModel->loadData($request->getBody());

            if ($categoryModel->validate() && $categoryModel->save()) {
                Router::$session->setFlash('success', 'Neue Kategorie hinzugefügt');
                Response::redirect('/admin/gallerymanager');
                exit;
            }
        }

        $this->viewParams['content'] = $categoryModel->getCategoryForm();
        return $this->render([
            'errors' => $categoryModel->errors
        ]);
    }

    public function uploadImage(Request $request, $file)
    {

        $imageModel = $this->imageModel;

        if ($request->isPost()) {
            $imageModel->loadData($request->getBody());
            $imageModel->uploadFile = $file;

            if ($imageModel->validate() && $imageModel->save()) {
                Router::$session->setFlash('success', 'Neues Bild hinzugefügt');

                Response::redirect('/admin/gallerymanager');
                exit;
            }
        }
        var_dump($imageModel->validate());
        $this->viewParams['content'] = $imageModel->getUploadImageForm();
        return $this->render([
            'errors' => $imageModel->errors
        ]);
    }

    public function render(array $params = [])
    {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/gallery.php';

        $this->viewParams['contend'] = ob_get_clean();
        return parent::render($params);
    }

}
