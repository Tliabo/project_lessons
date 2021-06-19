<?php

namespace Database;


use src\Database;
use src\ModelDb;

/**
 * @package Database
 */
class AdminCategoryModel extends ModelDb
{
    public string $rowid = '';
    public string $name = '';

    /**
     * @return string
     */
    public static function tableName(): string
    {
        return 'category';
    }

    public function attributes(): array
    {
        return ['name'];
    }

    public function rules(): array
    {
        return [
            'name' => [RULE_REQUIRED, [RULE_UNIQUE, 'class' => self::class]]
        ];
    }

    public function labels(): array
    {
        return [
            'name' => 'Kategorie Name'
        ];
    }

    public static function loadAllCategories(): array
    {
        $query = "SELECT ROWID, * FROM `category`";
        $statement = Database::prepare($query);
        $result = $statement->execute();
        $categories = [];
        while ($value = $result->fetchArray(SQLITE3_ASSOC)) {
            $categories[] = $value;
        }

        return $categories;
    }

    public function getCategoryForm() {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/partial/newCategoryForm.php';
        return ob_get_clean();
    }

}
