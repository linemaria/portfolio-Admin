


//variables
var websiteEl = document.getElementById("websites");
var websiteTable = document.getElementById("website_table");
var form = document.getElementById("website_form");
// var codeInput = document.getElementById("code");

var descriptionInput = document.getElementById("description");
var urlInput = document.getElementById("url");
var titleInput = document.getElementById("title");

var submit = document.getElementById("submit");
var id = document.getElementById("id");
var editForm = document.getElementById("edit-form");
var idInput = document.getElementById('id');
var websiteOutputEl = document.getElementById('websiteOutput');
var addWebsiteButtonEl = document.getElementById('submitWebsite');
var updateWebsiteButtonEl = document.getElementById('updateWebsite');
//Eventlistners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form Submitted");
});
window.addEventListener('load', getWebsites);
submit.addEventListener("click", submitWebsite);
//GET all Websites
function getWebsites() {
    websiteTable.innerHTML = "<thead>\n    <tr>\n   <th>Title</th>\n   <th>Description</th>\n   <th>Link</th>\n    </tr>";
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/websites.php")
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Failed to fetch");
        }
    })
        .then(function (data) {
        if (!data.message) {
            data.forEach(function (website) {
                websiteTable.innerHTML +=
                    "<tr>\n                            \n    <td>" + website.title + "</td>\n   <td>" + website.description + "</td>\n     <td>" + website.url + "</td>\n     <td class=\"noBoard\"><button id=\"" + website.id + "\" class=\"tdButt2\" onclick=\"editWebsite('" + website.title + "', '" + website.description + "', '" + website.url + "', '" + website.id + "' )\">Update</button></td>\n                                <td class=\"noBoard\"><button id=\"" + website.id + "\" class=\"tdButt\" onclick=\"deleteWebsite('" + website.id + "')\">Delete</button></td>\n                            </tr>";
            });
        }
        else {
            console.log("API: " + data.message);
        }
    })
        .catch(function (err) { return console.log(err); });
}

//ADD course
function submitWebsite() {
    var title = titleInput.value;
    var description = descriptionInput.value;
    var url = urlInput.value;
    var website = { 'title': title, 'description': description, 'url': url };
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/websites.php", {
        method: 'POST',
        body: JSON.stringify(website),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWebsites();
    })
        .catch(function (error) {
        console.log("ERROR: ", error);
    });
}
//DELETE Website
function deleteWebsite(id) {
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/websites.php?id=" + id, {
        method: 'DELETE',
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWebsites();
    })
        .catch(function (error) {
        console.log("ERROR: ", error);
    });
}

// EDIT Website
function editWebsite(title, description, url, id) {
    editForm.innerHTML =
        "\n        <form>\n                 <label for=\"title-edit\">title: </label>\n            <input type=\"text\" name=\"title-edit\" id=\"title-edit\" value=\"" + title + "\">\n            <br>\n            <label for=\"description-edit\">description: </label>\n            <input type=\"text\" name=\"description-edit\" id=\"description-edit\" value=\"" + description + "\">\n            <br>\n            <label for=\"url-edit\">Url: </label>\n            <input type=\"text\" name=\"url-edit\" id=\"url-edit\" value=\"" + url + "\">\n            <br>\n            <button class=\"tdButt2\" id=\"save\">Save</button>\n            <button class=\"tdButt\" onClick=\"abortEdit()\">Cancel</button>\n        </form>\n        ";
    var save = document.getElementById("save");
    save.addEventListener("click", function (e) {
        e.preventDefault();
        updateWebsite(id);
    });
}
// UPDATE website
function updateWebsite(id) {
    var titleInputEdit = document.getElementById("title-edit");
    var descriptionInputEdit = document.getElementById("description-edit");
    var urlInputEdit = document.getElementById("url-edit");

  
    var title = titleInputEdit.value;
    var description = descriptionInputEdit.value;
    var url = urlInputEdit.value;


    title.toString();
    description.toString();
    url.toString();
    var website = { 'title': title, 'description': description, 'url': url };
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/websites.php?id=" + id, {
        method: "PUT",
        body: JSON.stringify(website),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWebsites();
    })
        .catch(function (error) {
        console.log("Error: ", error);
    });
    abortEdit();
}
 ; 
function abortEdit() {
    editForm.innerHTML = "";
}
