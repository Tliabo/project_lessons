<?php


namespace Database;


class ErrorCodeModel
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

    public function getTitle()
    {
        return "Error $this->code";
    }
}
