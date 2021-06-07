<?php

namespace src;

abstract class Model
{
    protected $db;

    public function __construct()
    {
        $this->db = Database::getDb();
    }

}
