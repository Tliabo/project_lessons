<?php


namespace Database;


class BiografieModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/pages/biografie.php";
        return ob_get_clean();
    }

    public function getTitle()
    {
        return 'VP - Biografie';
    }
}
