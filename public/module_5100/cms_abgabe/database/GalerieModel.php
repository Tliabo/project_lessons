<?php


namespace Database;

use src\Database;
use src\SiteModel;

class GalerieModel extends AdminCategoryModel
{

    public string $rowid = '';
    public string $name = '';

    public array $images = [];

    public function getTitle(): string
    {
        return 'VP - Galerie';
    }

    public function loadImagesFromCategory() {
        $query = "SELECT * FROM `image` WHERE `category` = $this->rowid";
        $statement = Database::prepare($query);
        $result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
        if ($result) {
            $this->images[] = $result;
        }

    }

    public function getTechnik() {
        $this->loadImagesFromCategory();
        ob_start();
        include_once RESOURCE_DIR . '/templates/galerie/technik.tpl.php';
        return ob_get_clean();
    }

}
