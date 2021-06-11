<?php


namespace Database;

use src\SiteModel;

class GalerieModel extends SiteModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/pages/galerie.php";
        return ob_get_clean();
    }

    public function getTitle(): string
    {
        return 'VP - Galerie';
    }

}
