<?php


namespace Database;


use src\Model;

class LoginModel extends Model
{
    public string $username = '';
    public string $password = '';

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/admin/login.php";
        return ob_get_clean();
    }

    public function login()
    {
        return 'loggend in';
    }
}
