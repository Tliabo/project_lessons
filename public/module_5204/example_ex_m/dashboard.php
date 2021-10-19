<?php
session_start();
require('class/database_connect.php');
require('class/User.php');
// Userid in id Variable speichern
$id = $_SESSION['userid'];

if ($_SESSION['status'] == true) {
    // Neue Instanz von Userklasse, für Login
    $userInfo = new User($pdo);
    // Methode aufrufen, um Username anzuzeigen
    $showInfo = $userInfo->showInfos($id);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>

<!-- Usernamen anzeigen -->
<h1>Hello <?=$showInfo['username']?></h1>

<!-- Buttons um Funktionen aufzurufen -->
<button class="btn" onclick="loadStudents()">Students</button>
<button class="btn" onclick="loadTeachers()">Teachers</button>

<!-- Tabellentemplate -->
<table class="students-table">
<col width="100">
          <col width="100">
          <col width="200">
          <col width="130">
    <thead>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
    </thead>
    <!-- JSON Daten ausgeben -->
      <tbody id="tdata"></tbody>
</table>

<!-- Logout Button -->
<a href="logout.php" class="logout">Logout</a>

<!-- Javascript -->
<script src="code.js"></script>

</body>
</html>
<?php 
} else {
    echo "Log in first<br>";
    echo '<br><a href="index.php">Login</a>';
}
?>

