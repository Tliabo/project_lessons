<?php

use App\Controllers\BaseController;
use App\Models\BaseModel;
use App\Views\BaseView;

class Route
{
    private $success = false;

    public function __construct($name, $function)
    {
        if (!empty($_REQUEST)) {
            foreach ($_REQUEST as $key => $value) {
                $key = sanitize($key);
                $value = sanitize($value);
                if ($key == 'page' && $value == $name) {
                    $this->success = true;
                    $function();
                    break;
                }
            }
        }

        if ($this->success == false) {
            $this->renderBaseView();
        }
    }

    private function renderBaseView()
    {
        $model = new BaseModel();
        $controller = new BaseController($model);
        $view = new BaseView($controller, $model);

        echo $view->render();
    }

}