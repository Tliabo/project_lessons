// Funktion um Studenten anzuzeigen
var Students = [];

function loadStudents() {
    console.log("show students");
    // Tabelle auf leer setzen
    $("tbody").html(" ");
    // Hole Daten von JSON Datei
    $.getJSON('students.json', function (data) {
        $.each(data.Students, function (i, f) {
            // Template für Tabelle
            var tblRow = "<tr>" + "<td>" + f.Name + "</td>" +
                "<td>" + f.Username + "</td>" + "<td>" + f.Email + "</td>" + "<td>" + f.Address + "</td>";
            $(tblRow).appendTo("tbody");
        });
    });
}

// Funktion um Lehrer anzuzeigen
var Teachers = [];

function loadTeachers() {
    console.log("show teachers");
    // Tabelle auf leer setzen
    $("tbody").html(" ");
    // Hole Daten von JSON Datei
    $.getJSON('students.json', function (data) {
        $.each(data.Teachers, function (i, f) {
            // Template für Tabelle
            var teacherRow = "<tr>" + "<td>" + f.Name + "</td>" +
                "<td>" + f.Username + "</td>" + "<td>" + f.Email + "</td>" + "<td>" + f.Address + "</td>";
            $(teacherRow).appendTo("tbody");
        });
    });
}

