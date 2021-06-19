<?php


namespace Database;


use src\Database;
use src\ModelDb;
use src\Router;

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

    public ?array $uploadFile;

    public static function tableName(): string
    {
        return 'image';
    }

//    public function rules(): array
//    {
//        return [
//            'name' => [RULE_REQUIRED]
//        ];
//    }

    public function save()
    {
        var_dump($this->uploadFile);
        $target_file = UPLOAD_DIR . "/" . basename($this->uploadFile['name']);
        if (move_uploaded_file($this->uploadFile["tmp_name"], $target_file)) {
            Router::$session->setFlash('success', 'Bild wurde hochgeladen');
        } else {
            Router::$session->setFlash('error', 'Hochladen fehlgeschlagen');
        }
        return parent::save();
    }

    public function attributes(): array
    {
        return ['src', 'alt', 'name', 'description', 'price', 'category'];
    }

    public function loadImagesFromCategory(string $category)
    {

        $query = "SELECT * FROM image WHERE `category` = $category";
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
