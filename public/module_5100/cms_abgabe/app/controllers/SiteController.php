<?php


namespace App\Controllers;

class SiteController
{
    public array $viewParams = [
        'head' => [
            'lang' => 'de',
            'charset' => 'UTF-8',
            'title' => '',
            'links' => ''
        ]
    ];

    public function contact()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/contact.php";
        $viewContend = ob_get_clean();
        return $this->render(['contend' => $viewContend]);
    }

    public function handleContact()
    {
        return 'Handling submitted contact data';
    }

    public function home()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/home.php";
        $viewContend = ob_get_clean();
        return $this->render(['contend' => $viewContend]);
    }

    public function errorCode($code)
    {
        return $code;
    }

    private function render($params = []) {
        $params = array_merge($this->viewParams, $params);
        ob_start();
        extract($params);
        include_once RESOURCE_DIR . "/templates/base.tpl.php";
        return ob_get_clean();
    }
}
