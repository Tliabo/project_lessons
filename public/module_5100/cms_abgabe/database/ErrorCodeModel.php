<?php


namespace Database;

use src\SiteModel;

class ErrorCodeModel extends SiteModel
{
    const ERROR_CODE_404 = 404;
    const ERROR_CODE_500 = 500;

    public array $errorMessages = [
        404 => 'Page Not Found',
        500 => 'Internal Server Error'
    ];

    private int $code;

    public function __construct($code)
    {
        $this->code = $code;
    }

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/_error.php";
        return ob_get_clean();
    }

    public function getTitle(): string
    {
        return "Error $this->code";
    }

    public function getErrorCode(): int
    {
        return $this->code;
    }

    public function getErrorMessage()
    {
        return $this->errorMessages[$this->getErrorCode()];
    }
}
