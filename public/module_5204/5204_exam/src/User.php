<?php

namespace Exam;

use PDO;

class User
{
    private $db;

    public function __construct()
    {
        $this->db = Database::getDb();
    }

    public function show(string $username)
    {
        $query = "SELECT * FROM admin_user where `username` = :username";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':username', $username);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }

    public function validate(array $userdata)
    {
        $dbData = $this->show($userdata['username']);
        $message = [];

        $hasError = false;

        if ($userdata['username'] === $dbData['username']) {
            $message['username'] = 'Is valid';
        } else {
            $hasError = true;
        }

        if ($userdata['password'] === $dbData['password']) {
            $message['password'] = 'Is valid';
        } else {
            $hasError = true;
        }

        if ($hasError) {
            $message['error'] = 'User or password is invalid';
        }

        return $message;
    }

}