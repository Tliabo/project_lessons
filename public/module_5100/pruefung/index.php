<?php
session_start();
$error = $_SESSION['error'] ?? '';
?>
<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>WBD5100 S3</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="js/bootstrap.js" type="text/javascript"></script>
  
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/formular.css" rel="stylesheet">
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-md-4">
    
    </div>
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading"><h4>Login</h4></div>
        <div class="panel-body">
          <form action="login.php" method="post">
            <div class="col-md-4">
              <label for="username">Username:</label>
            </div>
            <div class="col-md-8">
              <input class="form-control" id="username" name="username">
            </div>
            <div class="col-md-4">
              <label for="password">Passwort</label>
            </div>
            <div class="col-md-8">
              <input class="form-control" id="password" name="password" type="password">
            </div>
            <div class="col-md-4">
              <div class="invalid-feedback">
                <?php
                if ($error ?? false): ?>
                  <div class="invalid-feedback">
                    <?= $error ?>
                  </div>
                <?php
                endif; ?>
              </div>
            </div>
            <div class="col-md-8">
              <button class="btn btn-primary btn-lg" id="submit" type="submit">login</button>
            </div>
          </form>
        
        </div>
      </div>
    
    </div>
    <div class="col-md-4">
    
    </div>
  </div>


</div>
</body>
</html>