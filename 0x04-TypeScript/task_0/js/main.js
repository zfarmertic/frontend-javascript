var studentOne = {
    firstName: "Erovwo",
    lastName: "Igbunuoghene",
    age: 45,
    location: "Enugu state, Nigeria"
};
var studentTwo = {
    firstName: "Merit",
    lastName: "Onogbotsere",
    age: 56,
    location: "Delat state, Nigeria"
};
var studentList = [studentOne, studentTwo];
// var studentOne = {
//     firstName: "Erovwo",
//     lastName: "Igbunuoghene",
//     age: 45,
//     location: "Enugu state, Nigeria"
// };
// var studentTwo = {
//     firstName: "Merit",
//     lastName: "Onogbotsere",
//     age: 56,
//     location: "Delat state, Nigeria"
// };
// var studentList = [studentOne, studentTwo];
function createTable() {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headerRow = document.createElement("tr");
    var headerContent = ['First Name', 'Location'];
    headerContent.forEach(function (text) {
        var headerH = document.createElement("th");
        headerH.textContent = text;
        console.log(headerH);
        headerRow.appendChild(headerH);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    studentList.forEach(function (tableBody) {
        var row = document.createElement("tr");
        var firstCell = document.createElement("td");
        firstCell.textContent = tableBody.firstName;
        row.appendChild(firstCell);
        var secondCell = document.createElement("td");
        secondCell.textContent = tableBody.location;
        row.appendChild(secondCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    var tab = document.getElementById("tab");
    tab.appendChild(table);
}
createTable();
