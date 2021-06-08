<?php


namespace Database;


class HomeModel
{
    public function getContend()
    {
        ob_start();
        include_once RESOURCE_DIR . "/views/home.php";
        return ob_get_clean();
    }

    public function getTitle()
    {
        return 'VP - Home';
    }

    public function getJS() {
        $scripts[] = "/assets/js/slider.js";
        return $scripts;
    }
}
