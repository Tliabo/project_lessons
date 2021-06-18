<?php

namespace src;

use mysqli_stmt;
use SQLite3;
use mysqli;
use SQLite3Stmt;

/**
 * TODO: handling of different db objects. prepare, execute, fetch
 * Singleton Database
 * Class Database
 * @package src
 */
class Database
{
    /**
     * @var null|mysqli|SQLite3
     */
    private static $db = null;

    private function __construct()
    {
    }

    /**
     * @return mysqli|SQLite3|null
     */
    public static function getDb()
    {
        if (is_null(self::$db)) {
            $db_conf = include_once CONF_DIR . '/database.php';
            switch ($db_conf['default']) {
                case 'mysql':
                    $mysql = $db_conf['connections']['mysql'];
                    self::$db = new mysqli($mysql['host'], $mysql['username'], $mysql['password'], $mysql['database'],
                        $mysql['port']);
                    break;
                case 'sqlite':
                    $sqlite = $db_conf['connections']['sqlite'];
                    self::$db = new SQLite3(DATABASE_DIR . '/' . $sqlite['database']);
                    break;
            }
        }
        return self::$db;
    }

    /**
     * @param string $query
     * @return false|mysqli_stmt|SQLite3Stmt
     */
    public static function prepare(string $query)
    {
        return self::getDb()->prepare($query);
    }
}
