<?php

session_start();

use Exam\User;

include_once 'src/helper.php';
require_once 'src/User.php';

$data = $_POST;
$response = [];

if ($data ?? false) {
    $username = sanitize($data['username']);
    $password = sanitize($data['password']);

    $user = new User();

    $user->validate($username, $password);

    if ($user->loginStatus) {
        $response['message'] = $user->loginMessage;
    }


    $_SESSION['username'] = $username;
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="login-wrapper">
  <form class="login-form">
    <h2>Log in to the system</h2>
    <label for="username">Username</label>
    <input id="username" name="username" type="text">
    <label for="password">Password</label>
    <input id="password" name="password" type="password">
    <button type="submit">Go!</button>
  </form>
  <div id="message">
      <?php
      if ($response['message'] ?? false) {
          echo $response['message'];
      }
      ?>
  </div>
</div>
</body>
</html>