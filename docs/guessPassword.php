<!DOCTYPE html>
<html lang="en">
<head>
    <title>Result Of Guess</title>
</head>
<body>
    
<!-- <a href="guessPasswordPHP.html">Try Again!</a> -->
<h1>
    <?php

$secret = "1234567890";

$entry = $_GET['passwd'];

if ($secret == $entry) {
    echo "<a href=\"guessPasswordPHP.html\">Correct!</a>";
} else {
    echo "<a href=\"guessPasswordPHP.html\">Try Again!</a>";
}

exit;
?>
</h1>

</body>
</html>