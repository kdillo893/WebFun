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
  $db_user = 'mydbuser';
  $db_password = 'SMlfOsNAF@@HxH0a';
  $db_dbname = 'mydatabase';
  
  // connect to database
  $connect = mysqli_connect($db_url, $db_user, $db_password, $db_dbname);
  
  // check connection
  if(!$connect){
    echo 'Connection error: ' . mysqli_connect_error();
  }
  
  // write query for all data
  $tablename = 'students';
  $sql = 'SELECT studentid, firstname, lastname, age, startdate FROM ' . $tablename;
  
  // Note: You can change the SQL query being used as the value in the line of code above to do something else, 
  // but you might have to change some other lines of code as well depending on what you decide to use.
  
  // make query & get result
  $result = mysqli_query($connect, $sql);
  
  // fetch the resulting rows as an array
  $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  
  // free result from memory
  mysqli_free_result($result);
  
  // close connection
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
    <?php $Value1 = htmlspecialchars($edata['studentid']); 
     $Value2 = htmlspecialchars($edata['firstname']); 
     $Value3 = htmlspecialchars($edata['lastname']); 
     $Value4 = htmlspecialchars($edata['age']); 
     echo "[studentid]=> " . $Value1 . " [firstname]=> " . $Value2 . " [lastname]=> " . $Value3 . " [age]=> " . $Value4 . ""; ?></h3>
    </li>
  <?php } ?>
  
</body>
</html>
