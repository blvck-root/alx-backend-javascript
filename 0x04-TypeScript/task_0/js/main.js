"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStudents = displayStudents;
var xhanti = {
    firstName: "Xhanti",
    lastName: "Nokwali",
    age: 27,
    location: "Capetown",
};
var kabza = {
    firstName: "Kabelo",
    lastName: "Motha",
    age: 32,
    location: "Johannesburg",
};
var styleSheet = "\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    font-weight: bold;\n  }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n\n  td:nth-child(1) {\n    text-align: center;\n  }\n";
var students = [kabza, xhanti];
function displayStudents(students) {
    var table = document.createElement("table");
    var tableHeader = document.createElement("thead");
    var tableBody = document.createElement("tbody");
    var row = document.createElement("tr");
    var colNames = ["First Name", "Location"];
    var keys = ["firstName", "location"];
    colNames.forEach(function (colName) {
        var col = document.createElement("th");
        col.innerText = colName;
        row.appendChild(col);
    });
    tableHeader.appendChild(row);
    table.appendChild(tableHeader);
    students.forEach(function (student) {
        var row = document.createElement("tr");
        keys.forEach(function (key) {
            var col = document.createElement("td");
            col.innerText = student[key];
            row.appendChild(col);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
displayStudents(students);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = "Task 0";
