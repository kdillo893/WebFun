
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <h1>This is regular HTML</h1>
    <?php
        $myVariable = "this is cool";

        echo '<h1>' 
        . $myVariable 
        . '</h1>';

        // echo phpinfo();
        echo $_SERVER['HTTP_USER_AGENT'];

        $number = 1234;
        $sum = $number + $number;
        $dif = $number - 100;
        $product = $number * 12;
        $quo = $number / 12;

        echo '<br>';
        echo 'sum: '.$sum.'; dif: '.$dif;
        echo 'product: '.$product.'; ';
        echo 'quotient: '.$quo;



        $number = "I can change the type,
        doesn't need to be explicit";
        $booleanVariable = false;

    
        unset($number);

        //number is unset, undefined, shouldn't show
        echo '<p>';
        echo $number;
        
        echo '</p>';
        
        # you can also do single-line comments this way.
        //regular comment
        /* multi-line comment
            hihi
        */
        /**
         * doc comments, don't worry about this.
         */

        echo '<br>';
        echo 'sum: '.$sum.'; dif: '.$dif;
        echo 'product: '.$product.'; ';
        echo 'quotient: '.$quo;
        

        if (isset($_GET)) {
            $num = $_GET["number"];

            if ($num < 10) {
                echo "number less than 10";
            } elseif ($num > 10) {
                echo "number greater than 10";
            } else {
                echo "number equal to 10!";
            }
        }

        
        

        echo '<p>';
        if ($booleanVariable) {
            echo "I'm in here";
        } else {
            print "This is also in here";
        }
        echo '</p>';








        if (str_contains($_SERVER['HTTP_USER_AGENT'],
                'Firefox')) {
    ?>
        <p>I am using firefox</p>
    <?php
        } else {
    ?>
        <p>I am not using firefox</p>
    <?php
        }
    ?>

    <form method="POST" action="formSubmit.php">
        <input type="text" name="name" />
        <label>Your favorite fruit?
            <input type="text" name="fruit" />
        </label>
        <button type="submit">Submit</button>
    </form>
</body>
</html>

