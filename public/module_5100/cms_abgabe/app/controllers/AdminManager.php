<?php


namespace App\Controllers;

use src\Model;

class AdminManager extends Model
{
    public function sitemanager()
    {
        ob_start();
        include RESOURCE_DIR . '/views/admin/manager/site.php';
        return ob_get_clean();
    }

    public function imagemanager()
    {
        ob_start();
        include RESOURCE_DIR . '/views/admin/manager/image.php';
        return ob_get_clean();
    }

    public function usermanager()
    {
        ob_start();
        include RESOURCE_DIR . '/views/admin/manager/user.php';
        return ob_get_clean();
    }
}
