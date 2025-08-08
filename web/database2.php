<?php 

  /**
   * MySQL connection requires:
   * 1. create a database in MySQL part of XAMPP
   *    a. make sure to use the same name as database you make
   *    b. create a user for the database with a password you know
   *    c. change the dbname, password, and user variables below
   * 2. start the MySQL instance.
   * 3. If the MySQL instance is on a different machine, change $db_url
   * 4. Ensure mysqli extension is enabled in php.ini for the apache server.
   */
  
  $db_url = 'localhost';
  $db_dbname = 'mydatabase';
  $db_user = 'mydbuser';
  $db_password = 'FAKE_PASSWORD_213$$';
  
  $connect = mysqli_connect($db_url, $db_user, $db_password, $db_dbname);
  
  if(!$connect){
    echo 'Connection error: ' . mysqli_connect_error();
  }
  
  $tablename = 'campers';
  $sql = 'SELECT camperid, firstname, grade_level, weeks FROM ' . $tablename;
  
  
  $result = mysqli_query($connect, $sql);
  
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  
  mysqli_free_result($result);
  
  mysqli_close($connect);
  
?>

<!DOCTYPE html>
<html>
<head>
  <title>Using PHP To Connect To A MySQL Database</title>
</head>
<body>

  <h1>Using PHP To Connect To A MySQL Database</h1>
  
  <h2>[Table Name]=> <?php
    echo $tablename;
  ?></h2>
  
    <?php foreach($data as $edata){ ?>
    <li data-rowId="<?php $edata?>">
    <?php 
      $camperId = htmlspecialchars($edata['camperid']); 
      $camperName = htmlspecialchars($edata['firstname']); 
      $class = htmlspecialchars($edata['class']); 
      $grade = htmlspecialchars($edata['grade']);
      $weeks = htmlspecialchars($edata['weeks']);
      echo "[camperId]=> " . $camperId . " [firstname]=> " 
        . $camperName . " [class]=> " . $class . " [grade]=> "
        . $grade . " [weeks]=>". $weeks ."";
    ?>
    </li>
  <?php } ?>
  
</body>
</html>
