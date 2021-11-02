<?php

namespace Exam;

use PDO;

class User
{
    private $db;

    public $loginStatus = false;
    public $loginMessage = '';

    public function __construct()
    {
        $this->db = Database::getDb();
    }

    public function show(string $username)
    {
        $query = "SELECT * FROM user where `username` = :username";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':username', $username);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
    }

    public function validate(string $username, string $password)
    {
        $hasError = false;

        $dbData = $this->show($username);

        if ($dbData) {
            if ($username === $dbData['username']) {
                $this->loginMessage = 'Is valid';
            } else {
                $hasError = true;
            }

            if ($password === $dbData['password']) {
                $this->loginMessage = 'Is valid';
            } else {
                $hasError = true;
            }

            if ($hasError) {
                $this->loginMessage = 'Username or password is invalid';
            } else {
                $this->loginStatus = true;
            }
        } else {
            $this->loginMessage = 'No username or password provided';
        }

        return $this;
    }

}