<?php

session_start();

use Exam\User;

require_once realpath('vendor/autoload.php');
include_once 'src/helper.php';

$data = $_POST;

if ($data ?? false) {
    $username = sanitize($data['username']);
    $password = sanitize($data['password']);

    $user = new User();

    $userdata['username'] = $username;
    $userdata['password'] = $password;

    $validation = $user->validate($userdata);

    if ($validation['error'] ?? false) {
        echo json_encode($validation);
        exit();
    }

    $_SESSION['username'] = $validation['username'];

    echo json_encode(["login" => true]);
    exit();
}
