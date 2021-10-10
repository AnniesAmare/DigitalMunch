<?php
$hello = "Hello dear world!... ALSO FARTS"
?>

<!doctype html>
<html>
<head>
    <title>Testsite Index</title>
    <!--This tag controls the site-layout on mobile devices (MDN) to that is adapts to the screen-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<h1><?php print_r($hello) ?></h1>

<!--We reference all javaScript-files at the bottom of the HTML body, because it gives the HTML
time to load before any of the JavaScript loads. This is to avoid errors from occurring when referencing
html in our js files-->
<script type="module" src="game.js"></script>
</body>
</html>
