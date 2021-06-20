<?php


namespace Database;

use src\Database;
use src\SiteModel;

class BiografieModel extends SiteModel
{

    public function getTitle(): string
    {
        return 'VP - Biografie';
    }

    public function getContend()
    {
        $query = "SELECT * FROM `page` WHERE `title` = 'Biografie'";
        $statement = Database::prepare($query);
        $statement->execute();
        $result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
        $this->pageTitle = $result['title'];
        $this->pageContend = $result['contend'];
        return $this->pageContend;
    }
}
