<?php
?>

<!DOCTYPE HTML>
<!-- Ordbog -->
<!-- <a href="https://www.w3schools.com">Visit W3Schools.com!</a> -->
<html>
<!-- header of the page -->
<head>
    <meta charset="utf-8">
    <title> Formstuff </title>
    <style type="text/css">
        body {
            background-color: white;
        }
        div {
            background-color: silver;
            padding: 30px;
            border: 1px black;
            margin-top: 30px;
        }
    </style>
</head>
<main>
    <!-- navigator of the page -->
    <nav>
    </nav>
    <!-- body of the page -->
    <div style="width:100%;padding:5px;margin:0px;" class=body>
        <style>
            .body h1 {
                padding:0;
                color:black;
                font-size:20px; }
            .body p {
                font-size:14px;
                color:black; }
        </style>
        <h1>This is inside the body</h1>
        <p>This is also inside the body</p>
    </div>
    <div>
        Hello <?php echo $_POST["fname"]," ",$_POST["lname"];?>
        <!-- Sender informationer til denne php, med html-input til beskyttelse mod hacks -->
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname"><br>

            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label><br>


            <label for="password">Type password:</label><br>
            <input type="password" id="code" name="Password"><br>

            <input type="submit" name="button" value="Submit"/></form>
        </form>
    </div>
    <body>
    </body>
</main>
</html>

<?php
$gender = $_POST["gender"];
if ($gender == "female") {
    echo "<body style='background-color:pink'>";
}
else if ($gender == "male") {
    echo "<body style='background-color:skyBlue'>";
}
else if ($gender == "other"){
    echo "<body style='background-color:#A090FF'>";
} else {echo "<body style='background-color:white'>";}
?>
