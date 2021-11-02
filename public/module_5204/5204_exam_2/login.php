<?php

session_start();

use Exam\Login;

require_once 'src/helper.php';
require_once 'src/Database.php';
require_once 'src/Login.php';

$data = $_POST ?? [];
$response = [];
$_SESSION['message'] = '';

if ($data ?? false) {
    $username = sanitize($data['username']);
    $password = sanitize($data['password']);

    $login = new Login();

    $login->validate($username, $password);

    $_SESSION['message'] = $login->loginMessage;
    $_SESSION['loginStatus'] = $login->loginStatus;
    $_SESSION['username'] = $username;

    if ($_SESSION['loginStatus']) {
        redirect('private/display.php');
    }
}

//var_dump($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login - Retake</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="login-wrapper">
  <form class="login-form" method="post">
    <h2>Log in to the system</h2>
    <label for="username">Username</label>
    <input id="username" name="username" type="text">
    <label for="password">Password</label>
    <input id="password" name="password" type="password">
    <div id="message">
        <?php
        if ($_SESSION['message'] ?? false) {
            echo $_SESSION['message'];
        } ?>
    </div>
    <button type="submit">Log In</button>
  </form>
</div>
</body>
</html>