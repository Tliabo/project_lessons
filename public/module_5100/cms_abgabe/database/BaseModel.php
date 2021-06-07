<?php
/*
 * Each model can represent a entity in the database.
 * But sometimes you also have a model that doesnt need to be saved in the DB.
 */

namespace Database;

use src\Model;

class BaseModel extends Model
{
    public function __construct()
    {

    }
}
