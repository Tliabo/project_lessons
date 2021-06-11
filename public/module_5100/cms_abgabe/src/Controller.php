<?php


namespace src;


abstract class Controller
{
    public array $viewParams = [
        'head' => [
            'lang' => 'de',
            'charset' => 'UTF-8',
            'title' => '',
            'links' => [
                [
                    'href' => '/assets/css/core.css'
                ]
            ],
            'scripts' => [
                [
                    'src' => 'https://kit.fontawesome.com/f1e04c054c.js',
                    'crossorigin' => 'anonymous'
                ]
            ]
        ],
        'contend' => '',
        'afterFooter' => [
            'js' => [
                [
                    'src' => "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
                    'integrity' => 'sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4',
                    'crossorigin' => 'anonymous'
                ]
            ]
        ]
    ];

    /**
     * @param array $params
     * @return false|string
     */
    public function render(array $params = [])
    {
        $params = array_merge($this->viewParams, $params);
        ob_start();
        extract($params);
        include_once RESOURCE_DIR . "/templates/base.tpl.php";
        return ob_get_clean();
    }
}
