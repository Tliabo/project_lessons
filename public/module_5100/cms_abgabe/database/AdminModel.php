<?php


namespace Database;


use src\Model;

class AdminModel extends Model
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/admin/login.php";
        return ob_get_clean();
    }
}
