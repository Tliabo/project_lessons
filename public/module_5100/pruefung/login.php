<?php
session_start();
include_once 'helper.php';
$user = [
  'username' => '',
  'password' => '',
  'lastlogin' => ''
];

function checkData($username = '', $password = '')
{
  if ($username) {
    $dbconf = include_once 'config.php';
    $pdo = new PDO($dbconf['mysql']['host'], $dbconf['mysql']['username'], $dbconf['mysql']['password']);

    $query = "SELECT * FROM `users` WHERE `username` = ?";
    $statement = $pdo->prepare($query);

    if ($statement->execute([$username])) {
      $userdata = $statement->fetch(PDO::FETCH_ASSOC);
      $id= $userdata['id'];
      $query = "ALTER TABLE `users` WHERE `id` = $id";
      $statement = $pdo->prepare($query);

      if ($userdata['username'] == $username && $userdata['password'] == $password) {
        $_SESSION['user'] = $userdata;
        redirect('private.php');
        exit;
      }
    }
  }
  $_SESSION['error'] = 'Überprüfen deine Logindaten';
}

if ($_POST ?? false) {
  $user['username'] = sanitize($_POST['username']);
  $user['password'] = sanitize($_POST['password']);
  checkData($user['username'], $user['password']);
}
redirect('/');
