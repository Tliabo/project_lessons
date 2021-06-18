<?php


namespace Database;


use src\ModelDb;
use src\Request;

/**
 * @package Database
 */
class SiteModel extends ModelDb
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

    public function save()
    {
        return parent::save();
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

    public function getForm() {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/partial/newSiteForm.php';
        return ob_get_clean();
    }

}
