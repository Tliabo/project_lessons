<?php

// Klasse ist Bauplan wo Infos drin gespeichert werden
class User {

// Attributes
protected $pdo; 

// Constructor - Braucht DB Verbindung, mit Konstruktor in Variable speichern
public function __construct (PDO $pdo){
    $this->pdo = $pdo;
}

// Method

public function checkUser($username, $password) {
    // Datenbankabfrage
    $query = "SELECT * FROM login_users WHERE username = :username and password = :password";
    // Prepared Statement erstellen
    $stmt = $this->pdo->prepare($query);
    // Statement ausführen
    $stmt -> execute(['username' => $username, 'password' => $password]);
    $user = $stmt -> fetch();
    return $user;
}

public function showInfos($id) {
    // Datenbankabfrage
    $query = "SELECT * FROM login_users WHERE id = :id";
    // Prepared Statement erstellen
    $stmt = $this->pdo->prepare($query);
    // Statement ausführen
    $stmt -> execute(['id' => $id]);
    $user = $stmt -> fetch();
    return $user;
}





};