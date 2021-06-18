<?php


namespace Database;


use src\Database;
use src\ModelDb;

class AdminImageModel extends ModelDb
{
    public string $rowid = '';
    public string $src = '';
    public string $alt = '';
    public string $name = '';
    public string $description = '';
    public string $price = '';
    public string $category = '';

    public array $images = [];

    public static function tableName(): string
    {
        return 'image';
    }

    public function attributes(): array
    {
        return ['src', 'alt', 'name', 'description', 'price', 'category'];
    }

    public function loadImages()
    {
        $query = "SELECT * FROM image";
        $statement = Database::prepare($query);
        $statement->execute();
    }

    public function getUploadImageForm()
    {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/partial/uploadImageForm.php';
        return ob_get_clean();
    }

    public function labels(): array
    {
        return [
            'name' => 'Bild Hochladen'
        ];
    }
}
