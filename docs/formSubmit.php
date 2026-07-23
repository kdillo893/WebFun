<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submit</title>
</head>
<body>
    <p>
        <?php 
        
        echo "hi"
        
        ?>
    


        <?php
        echo $_POST['name']
        ?>





        
        Hi, <?php


    echo htmlspecialchars($_POST['name']); ?>.
    Your favorite fruit is <?php
    echo htmlspecialchars($_POST['fruit']); ?>. 
    
    

    </p>
</body>
</html>