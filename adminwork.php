<?php 
include_once("includes/config.php");
$page_title ="min arbetserfarenhet";
include("includes/header.php");     
?>
    
        <h2 id="formheading">Add Work</h2>
        <!-- inputformulär arbete-->


 <form id="work_form" method="POST" > 

   <div class="inputDiv">
            <label for="workplace">Arbetsplats:</label>
            <input id="workplace" name="workplace" type="text" placeholder="Ex. ICA">
        </div>

        <div class="inputDiv">
            <label for="title">Titel:</label>
            <input id="title" name="title" type="text" placeholder="Ex. Chef">
        </div>

        <div class="inputDiv">
            <label for="start">Start:</label>
            <input id="start" name="start" type="text" placeholder="YYYY-MM-DD">
        </div>

        <div class="inputDiv">
            <label for="stop">Slut:</label>
            <input id="stop" name="stop" type="text" placeholder="YYYY-MM-DD">
        </div>

        <div class="inputDiv">
            <input id="submit" type="submit" value="Lägg till">
        </div>
        </form> 

      
        <p id="message"></p>

        <h2 id="workheading">My Work</h2>


        <div id="edit-form"></div>
        <table id="work_table"></table>



<?php include("includes/footer.php"); ?>
    
<script src="js/works.js"></script>    

</body>
</html>