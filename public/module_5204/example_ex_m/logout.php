<?php
session_start();
// Usersession entfernen
unset($_SESSION['username']);
// Session beenden und zurückkehren zu Login
session_destroy();
header("Location: index.php");
?>