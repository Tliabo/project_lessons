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
    public string $title = '';
    public string $contend = '';

    /**
     * @return string
     */
    public static function tableName(): string
    {
        return 'page';
    }

    public function attributes(): array
    {
        return ['rowid', 'title', 'contend'];
    }

    public function labels(): array
    {
        return [
            'title' => 'Seiten Titel',
            'contend' => 'Seiten Inhalt'
        ];
    }

    public function getForm() {
        ob_start();
        include_once RESOURCE_DIR . '/views/admin/manager/partial/editSiteForm.php';
        return ob_get_clean();
    }

}
