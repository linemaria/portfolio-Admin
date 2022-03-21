<?php
session_start();
include('includes/config.php');
include('includes/header.php');
?>
<?php
//kontroll om sessionsvariabel finns
if (!isset($_SESSION['username']) && (!isset($_SESSION['id']))) {
    header("Location: index.php?message=2");
} else {
    echo "<span class='loggedin'>Du är inloggad som " . $_SESSION['username'] . "</span>";
}
?>
<script src="https://cdn.ckeditor.com/4.16.0/basic/ckeditor.js"></script>

<section class="main">
    <?php
    // om anv ej är inloggad, redirect
    if (!isset($_SESSION['username'])) {
        header("Location: index.php?message=2");
    } else {
        //annars skriv ut
        echo "<h1>Välkommen " . $_SESSION['username'] . "!</h1>";
    }
    ?>

 
        <div class="grid">
            <a href="logout.php" class="logoutbtn">Logga ut</a>
        </div>
       

</section>
   
    <?php
    include('includes/footer.php');
    ?>