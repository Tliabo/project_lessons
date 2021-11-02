<?php

session_start();
require_once "../src/helper.php";
$sessionData = $_SESSION;

if ($_GET['logout'] ?? false) {
    clearSession();
}

if ($sessionData['loginStatus'] ?? false) {
    $username = $sessionData['username'];
} else {
    // clean session data
    clearSession();
}

function clearSession()
{
    // clean session data
    $_SESSION['loginStatus'] = false;
    $_SESSION['username'] = null;
    redirect('../login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Display Data - Retake</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="wrapper-main">
  <h1>You are loged in as: <?= $username ?></h1>
  <div class="button-container">
    <button class="student">Students</button>
    <button class="teacher">Teachers</button>
  </div>
  <table class="display-table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
    <tr>
    </thead>
    <tbody>

    </tbody>
    <tfoot>

    </tfoot>
  </table>
  <button class="logout">Log Out</button>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<script>
    let data;

    function getdata(type) {
        // YOUR CODE HERE
        $.ajax({
            url: '../api/data.json'
        }).done(function (p_data) {
            data = p_data;
            renderTable(type);
        })
    }

    function renderTable(type) {
        let template = `
<tr>
  <td>{name}</td>
  <td>{username}</td>
  <td>{email}</td>
  <td>{phone}</td>
</tr>
        `;

        // reset table body contend
        $('.display-table tbody').html('');

        data.forEach((person) => {
            // add person to table
            if (person.type === type) {
                let html = template.replace('{name}', person.name);
                html = html.replace('{username}', person.username);
                html = html.replace('{email}', person.email);
                html = html.replace('{phone}', person.phone);
                $('.display-table tbody').append(html);
            }
        });
    }

    document.querySelector('.student').addEventListener('click', () => {
        getdata('student')
    })

    document.querySelector('.teacher').addEventListener('click', () => {
        getdata('teacher')
    })

    document.querySelector('.logout').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '?logout=true'
    })

</script>

</body>
</html>