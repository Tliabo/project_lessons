<?php
session_start();
$_SESSION['status'] = false;
// Session starten und Klassen-Dateien integrieren
require('class/database_connect.php');
require('class/Sanitize.php');
require('class/User.php');

// Instanzieren der Klasse
$sanitize = new Sanitize();
$loginUser = new User($pdo);

// Wenn der Login Button gedrückt wurde
if (isset($_POST['login'])) {

    var_dump($_POST['username']);

    // Userinput "reinigen"
    $username = $sanitize->SanitizeInput($_POST['username']);
    $password = $sanitize->SanitizeInput($_POST['password']); 
    // var_dump($username);

    // Userklasse aufrufen
    $user = $loginUser->checkUser($username, $password);
    // var_dump($user);

    if(!$user) {
        // Wenn etwas nicht stimmt
        echo "Wrong Password or Username!";
    } else {
        // Wenn die Angaben stimmen, auf Dashboard einloggen
        $_SESSION['status'] = true;
        $_SESSION['userid'] = $user['id'];
        header('Location: dashboard.php');
    }

} else {
    // Variablen auf leer setzen
    $username = "";
    $password = "";
}

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Probeprüfung</title>
    <style>
    
    form {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 2em;
    }

    label, input {
        margin: 0.5em;
    }

    </style>
    
</head>
<body>
    
    <h1>Hello Darkness my old Friend</h1>

    <!-- Form für Login -->
    <form action="" method="post">
        <h2>Login</h2>

        <label for="">Username</label>
        <input type="text" name="username" value="<?=$username?>">

        <label for="">Password</label>
        <input type="password" name="password" value="<?=$password?>">

        <!-- Login Button -->
        <input type="submit" value="Login" name="login">
    </form>


</body>
</html>