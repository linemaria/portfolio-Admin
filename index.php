

<?php
include("includes/config.php"); 

if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    //Tillåt inloggning när input matchar
    if($username === $myusername && $password === $mypassword){
        $_SESSION['username'] = $username;
        
    }else {
        $message = "Felaktigt användarnamn/lösenord!";
    }
}

?>
<!-- Admingränssnitt Line Asp-->
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Admin</title>
    <link rel="stylesheet" href="css/main.css">

    <!-- favikon-->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" href="images/ikon.png">

</head>
<body>


<div id="admin">
<div id="frontlogo">
    <img src="LA_black.png" alt="Logotyp" class="logo">
</div>
    <h1>Manage My <br>Portfolio</h1>

<?php
    if(isset($_GET['message'])) {
        echo "<p>" . $_GET['message'] . "</p>";
    }

    if(isset($message)) {
        echo "<p>" . $message . "</p>";
    }

?>
<?php
    if(!isset($_SESSION['username'])){
    
?>
    <form id="loginform" method="post" action="index.php">
        <label for="username">Username:</label>
        <br>
        <input type="text" name="username" id="username"><br>
        <label for="password">Password:</label>
        <br>
        <input type="password" name="password" id="password"><br>
        <input id ="loginbtn" type="submit" value="Logga in">
    </form>
<?php
    }else {
?>
  <ul class="adminMenu">
        <li><a href="admincourses.php" class="box1">> Education</a></li>
        <li><a href="adminwork.php" class="box2"> > Work</a></li>
        <li><a href="adminwebsites.php" class="box3">> Projects</a></li>
        <li><a href="http://localhost:3000/index.html" target ="_blank" class="box4">> My Portfolio</a></li>   
    </ul>
    <a href="logout.php" class="logout">Logga ut</a>
<?php
    }
?>