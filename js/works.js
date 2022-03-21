//variables
var worksEl = document.getElementById("works");
var workTable = document.getElementById("work_table");
var form = document.getElementById("work_form");
// var codeInput = document.getElementById("code");

var workplaceInput = document.getElementById("workplace");
var titleInput = document.getElementById("title");
var startInput = document.getElementById("start");
var stopInput = document.getElementById("stop");
var submit = document.getElementById("submit");
var id = document.getElementById("id");
var editForm = document.getElementById("edit-form");
var idInput = document.getElementById('id');
var workOutputEl = document.getElementById('workOutput');
var addWorkButtonEl = document.getElementById('submitWork');
var updateWorkButtonEl = document.getElementById('updateWork');
//Eventlistners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form Submitted");
});
window.addEventListener('load', getWorks);
submit.addEventListener("click", submitWork);
//GET all Works
function getWorks() {
    workTable.innerHTML = "<thead>\n                        <tr>\n                            <th>Workplace</th>\n                            <th>School</th>\n                            <th>Start</th>\n                            <th>Stop</th>\n                        </tr>";
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/works.php")
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
            data.forEach(function (work) {
                workTable.innerHTML +=
                    "<tr>\n                            \n                                <td>" + work.workplace + "</td>\n                                <td>" + work.title + "</td>\n                                <td>" + work.start + "</td>\n                                <td>" + work.stop + "</td>\n                                <td class=\"noBoard\"><button id=\"" + work.id + "\" class=\"tdButt2\" onclick=\"editWork('" + work.workplace + "', '" + work.title + "', '" + work.start + "', '" + work.stop + "', '" + work.id + "' )\">Update</button></td>\n                                <td class=\"noBoard\"><button id=\"" + work.id + "\" class=\"tdButt\" onclick=\"deleteWork('" + work.id + "')\">Delete</button></td>\n                            </tr>";
            });
        }
        else {
            console.log("API: " + data.message);
        }
    })
        .catch(function (err) { return console.log(err); });
}

//ADD Work
function submitWork() {
    var workplace = workplaceInput.value;
    var title = titleInput.value;
    var start = startInput.value;
    var stop = stopInput.value;
    var work = { 'workplace': workplace, 'title': title, 'start': start, 'stop': stop };
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/works.php", {
        method: 'POST',
        body: JSON.stringify(work),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWorks();
    })
        .catch(function (error) {
        console.log("ERROR: ", error);
    });
}
//DELETE Work
function deleteWork(id) {
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/works.php?id=" + id, {
        method: 'DELETE',
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWorks();
    })
        .catch(function (error) {
        console.log("ERROR: ", error);
    });
}
//EDIT Work
function editWork(workplace, title, start, stop, id) {
    editForm.innerHTML =
        "\n        <form>\n            <label for=\"workplace-edit\">Workplace: </label>\n            <input type=\"text\" name=\"workplace-edit\" id=\"workplace-edit\" value=\"" + workplace + "\">\n            <br>\n            <label for=\"title-edit\">title: </label>\n            <input type=\"text\" name=\"title-edit\" id=\"title-edit\" value=\"" + title + "\">\n            <br>\n            <label for=\"start-edit\">Start: </label>\n            <input type=\"text\" name=\"start-edit\" id=\"start-edit\" value=\"" + start + "\">\n            <br>\n            <label for=\"stop-edit\">Stop: </label>\n            <input type=\"text\" name=\"stop-edit\" id=\"stop-edit\" value=\"" + stop + "\">\n            <br>\n            <button class=\"tdButt2\" id=\"save\">Save</button>\n            <button class=\"tdButt\" onClick=\"abortEdit()\">Cancel</button>\n        </form>\n        ";
    var save = document.getElementById("save");
    save.addEventListener("click", function (e) {
        e.preventDefault();
        updateWork(id);
    });
}
//UPDATE Work
function updateWork(id) {
    var workplaceInputEdit = document.getElementById("workplace-edit");
    var titleInputEdit = document.getElementById("title-edit");
    var startInputEdit = document.getElementById("start-edit");
    var stopInputEdit = document.getElementById("stop-edit");
    var workplace = workplaceInputEdit.value;
    var title = titleInputEdit.value;
    var start = startInputEdit.value;
    var stop = stopInputEdit.value;
    workplace.toString();
    title.toString();
    start.toString();
    stop.toString();
    var work = { 'workplace': workplace, 'title': title, 'start': start, 'stop': stop };
    fetch("http://studenter.miun.se/~lias1700/writeable/projekt-webbtjanst/works.php?id=" + id, {
        method: "PUT",
        body: JSON.stringify(work),
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        getWorks();
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
