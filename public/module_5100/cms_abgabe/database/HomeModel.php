<?php

namespace Database;

use src\SiteModel;

class HomeModel extends SiteModel
{
    public function getTitle(): string
    {
        return 'VP - Home';
    }

    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/home.php";
        return ob_get_clean();
    }
}
