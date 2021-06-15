<?php


namespace Database;

use src\SiteModel;

class ErrorCodeModel extends SiteModel
{
    private $code;

    public function __construct($code)
    {
        $this->code = $code;
    }

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/_$this->code.php";
        return ob_get_clean();
    }

    public function getTitle(): string
    {
        return "Error $this->code";
    }
}
