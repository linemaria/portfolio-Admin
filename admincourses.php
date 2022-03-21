

<?php 
include_once("includes/config.php");
$page_title ="mina utbildingar";
include("includes/header.php");     
?>
    
        <h2 id="formheading">Add Education</h2>
        <!-- inputformulär utbildning-->
<!--         <form id="postform">
            <label for="coursename"> Kursnamn:<br>
            <input type="text" name="coursename" id="coursename"></label><br>
            <label for="school"> Skola:<br>
            <input type="text" name="school" id="school"></label><br>
            <label for="start"> Start:<br>
            <input type="text" name="start" id="start"></label><br>
            <label for="stop"> Stop:<br>
            <input type="text" name="stop" id="stop"></label><br>
            <button id="add" class="edubtn">Lägg till utbildning</button>
            <button id="update" class="edubtn"> Uppdatera utbildning</button>
        </form> -->


<form id="course_form" method="POST" > 

  <div class="inputDiv">
        <label for="coursename">Kursnamn:</label>
        <input id="coursename" name="coursename" type="text" placeholder="Ex. Webbutveckling I">
    </div>

    <div class="inputDiv">
        <label for="school">Skola:</label>
        <input id="school" name="school" type="text" placeholder="Ex. Mittuniversitetet">
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

        <h2 id="educationheading">My Education</h2>
        <div id="edit-form"></div>
        <table id="course_table"></table>

    

        <!-- utskrift mobil gör ej synlig på webb--> 
        <div id="eduprintlist">

        </div>

    </div>

<?php include("includes/footer.php"); ?>
<script src="js/courses.js"></script>   
</body>
</html>



