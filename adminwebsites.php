

<?php 
include_once("includes/config.php");
$page_title ="mina utbildingar";
include("includes/header.php");     
?>
    
        <h2 id="formheading">Add Project</h2>
        <!-- inputformulär webbsidor -->

<form id="website_form" method="POST" > 

  <div class="inputDiv">
        <label for="title">Title:</label>
        <input id="title" name="title" type="text" placeholder="Ex. Webbutveckling I">
    </div>

    <div class="inputDiv">
        <label for="description">Beskrivning:</label>
        <input id="description" name="description" type="text" placeholder="Ex. UX design, typ av kund">
    </div>

    <div class="inputDiv">
        <label for="url">Link:</label>
        <input id="url" name="url" type="text" placeholder="www.hej.se">
    </div>

    <div class="inputDiv">
        <input id="submit" type="submit" value="Lägg till">
    </div>
</form> 
        <p id="message"></p>

        <h2 id="educationheading">My Projects</h2>


        <div id="edit-form"></div> 
        <table id="website_table"></table>

    

        <!-- utskrift mobil gör ej synlig på webb--> 
        <div id="eduprintlist">

        </div>

    </div>

<?php include("includes/footer.php"); ?>
<script src="js/websites.js"></script>   
</body>
</html>