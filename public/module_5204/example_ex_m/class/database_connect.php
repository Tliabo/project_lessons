<?php

/* Datenbank Verbindung */
try {
    $pdo = new PDO (
        'mysql:host=localhost;dbname=testpruefung_users;charset=utf8', 'root', 'root'
    );
    // Set PDO Error Mode to exception
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Verbindung zur Datenbank fehlgeschlagen".$e->getMessage();
}

?>