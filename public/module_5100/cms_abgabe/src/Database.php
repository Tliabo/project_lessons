<?php

namespace src;

use SQLite3;
use mysqli;

class Database
{
    private static $db = null;

    private function __construct()
    {
    }

    public static function getDb()
    {
        if (is_null(self::$db)) {
            $db_conf = include_once CONF_DIR . '/database.php';
            switch ($db_conf['default']) {
                case 'mysql':
                    $mysql = $db_conf['connections']['mysql'];
                    self::$db = new mysqli($mysql['host'], $mysql['username'], $mysql['password'], $mysql['database'], $mysql['port']);
                    break;
                case 'sqlite':
                    $sqlite = $db_conf['connections']['sqlite'];
                    self::$db = new SQLite3(DATABASE_DIR . '/' . $sqlite['database']);
                    break;
            }
        }
        return self::$db;
    }

}
