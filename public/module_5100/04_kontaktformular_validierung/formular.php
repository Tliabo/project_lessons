<?php

var_dump($_POST);
$email = $subject = $message = '';
$headers = ['From', 'Reply-To', 'Content-type', 'charset'];
$sendTo = '';

$errors = [];

$isValidated = false;

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $message = test_input($_POST['message']);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $isValidated = true;

        $headers['From'] = $email;
        $headers['Reply-To'] = $email;
        $headers['Content-type'] = 'text/plain';
        $headers['charset'] = 'UTF-8';

        if (!empty($_POST['send-copy']) && $_POST['send-copy'] === 'on') {
            $sendTo .= ', ' . $email;
        }

        mail($sendTo, $subject, $message, $headers);
    }
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//mail($sendTo, $subject, $message, $header);
//mail($email, $subject, $message, $header);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Title</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<form action="formular.php" method="post">
  <label>
    Name
    <input type="text" name="name">
  </label>
  <label>
    E-Mail
    <input type="email" name="from">
  </label>
  <label>
    Message
    <textarea name="message"></textarea>
  </label>
  <label>
    Kopie senden?
    <input type="checkbox" name="send-copy" checked>
  </label>
  <button type="submit">Send</button>
</form>
<script src="assets/js/index.js"></script>


</body>
</html>