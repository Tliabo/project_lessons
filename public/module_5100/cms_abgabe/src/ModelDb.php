<?php

namespace src;

abstract class ModelDb extends Model
{

    abstract public static function tableName(): string;

    abstract public function attributes(): array;

    public function saveInsert()
    {
        $tableName = $this->tableName();
        $attributes = $this->attributes();
        $params = array_map(fn($attr) => ":$attr", $attributes);
        $query = "INSERT INTO $tableName (" . implode(',', $attributes) . ") VALUES(" . implode(',', $params) . ")";
        $statement = Database::prepare($query);

        foreach ($attributes as $attribute) {
            $statement->bindValue(":$attribute", $this->{$attribute});
        }

        $statement->execute();
        return true;
    }

    public function update()
    {
        $tableName = $this->tableName();
        $attributes = $this->attributes();
        $params = [];
        foreach ($attributes as $attribute) {
            $params[] = "$attribute = :$attribute";
        }

        $query = "UPDATE $tableName SET " . implode(',', $params) . "  WHERE `rowid` = $this->rowid";
        $statement = Database::prepare($query);
        foreach ($attributes as $attribute) {
            $statement->bindValue(":$attribute", $this->{$attribute});
        }

        $statement->execute();
        return true;
    }

    public function delete()
    {
    }

    public static function findOne($where)
    {
        $tableName = static::tableName();
        $attributes = array_keys($where);
        $sql = implode("AND", array_map(fn($attr) => "$attr = :$attr", $attributes));
        $statement = Database::prepare("SELECT rowid, * FROM $tableName WHERE $sql");
        foreach ($where as $key => $value) {
            $statement->bindValue(":$key", $value);
        }
        $userData = $statement->execute()->fetchArray(SQLITE3_ASSOC);
        if ($userData) {
            $class = '\\' . static::class;
            $returnModel = new $class();
            $returnModel->loadData($userData);
            return $returnModel;
        }
        return false;
    }


    public function primaryKey(): string
    {
        return 'rowid';
    }
}
