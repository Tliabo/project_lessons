<?php

$host = "localhost"; /* Host name */
$user = "homestead"; /* User */
$password = "secret"; /* Password */
$dbname = "kungfu"; /* Database name */

$con = mysqli_connect($host, $user, $password, $dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

return $con;