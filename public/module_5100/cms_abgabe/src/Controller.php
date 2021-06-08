<?php


namespace src;


abstract class Controller
{
    public array $viewParams = [
        'head' => [
            'lang' => 'de',
            'charset' => 'UTF-8',
            'title' => '',
            'links' => ['/assets/css/core.css']
        ],
        'contend' => '',
        'afterFooter' => []
    ];

    public function render($params = [])
    {
        $params = array_merge($this->viewParams, $params);
        ob_start();
        extract($params);
        include_once RESOURCE_DIR . "/templates/base.tpl.php";
        return ob_get_clean();
    }
}
