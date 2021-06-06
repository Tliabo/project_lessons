<?php
/*
 * Each model can represent a entity from the database.
 * But sometimes you need a model that is not in the saved in the DB.
 */

namespace Database;

use Model;

class BaseModel extends Model
{
    public function __construct()
    {

    }
}
