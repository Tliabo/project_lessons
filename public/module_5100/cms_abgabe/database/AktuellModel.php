<?php


namespace Database;

use src\SiteModel;

class AktuellModel extends SiteModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/pages/aktuell.php";
        return ob_get_clean();
    }

    public function getTitle(): string
    {
        return 'VP - Aktuell';
    }

}
