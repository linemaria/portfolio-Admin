<?php
    // Kontroll om användare inloggad
    if(!isset($_SESSION['username'])){
        header("location: index.php?message=Logga in för att administera...");
    }

?>

<!DOCTYPE html> 
<html lang="sv">
    <head> 
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin</title>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="shortcut icon" href="LA_black.png" type="image/x-icon">
        <link rel="icon" type="image/png" href="LA_black.png">
    </head>
    <body>
        <header>
       
        <div class="headergrid">
                <div class="headergrids">
                    <a href="index.php">
            <img src="LA_black.png" alt="Logga" class="logo">
            </a>
        </div>
        
  <h1> Line's <br>Portfolio<br> Admin </h1>
  <div class="underMenu">
 <a href="http://localhost:3000/index.html" class="meny">> Visit Portfolio</a>
 <br>
 <a href="index.php" class="meny"> < Back </a>
</div>                 
</div>           

  
 
       </header>