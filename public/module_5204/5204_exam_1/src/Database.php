<?php

namespace Exam;

use PDO;

class Database extends PDO
{
    private static PDO|null $db = null;

    private function __construct()
    {
    }

    /**
     * @return PDO|null
     */
    public static function getDb(): PDO|null
    {
        if (is_null(self::$db)) {
            $db_conf = include_once 'config/database.php';
            $mysql = $db_conf['connections']['mysql'];

            $dns = $mysql['driver'] . ':host=' . $mysql['host'] . ';port=' . $mysql['port'] . ';dbname=' . $mysql['dbname'];

            self::$db = new PDO($dns, $mysql['username'], $mysql['password']);
        }
        return self::$db;
    }
}
