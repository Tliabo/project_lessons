<?php

namespace src;

class Response
{

    public static function setStatusCode(int $code)
    {
        http_response_code($code);
    }

    public static function redirect(string $path)
    {
        header('Location: ' . $path);
    }
}
