<?php


namespace Database;


class GalerieModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/pages/galerie.php";
        return ob_get_clean();
    }

    public function getTitle()
    {
        return 'VP - Galerie';
    }

}
