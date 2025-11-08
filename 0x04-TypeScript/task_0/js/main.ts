interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Erovwo",
    lastName: "Igbunuoghene",
    age : 45,
    location: "Enugu state, Nigeria"
}

const studentTwo: Student = {
    firstName: "Merit",
    lastName: "Onogbotsere",
    age: 56,
    location: "Delat state, Nigeria"
}

const studentsList = [studentOne, studentTwo];


function createTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    const headerContent = ['First Name', 'Location'];

    headerContent.forEach(text => {
        const headerH = document.createElement("th");
        headerH.textContent = text;
        console.log(headerH)
        headerRow.appendChild(headerH);
        })

        thead.appendChild(headerRow)
        table.appendChild(thead)


studentsList.forEach(tableBody => {
    const row = document.createElement("tr")
    const firstCell = document.createElement("td")
    firstCell.textContent = tableBody.firstName

    row.appendChild(firstCell)
    const secondCell = document.createElement("td")
    secondCell.textContent = tableBody.location
    row.appendChild(secondCell)

    tbody.appendChild(row)
})
  table.appendChild(tbody)
        
        const tab = document.getElementById("tab")
        tab.appendChild(table)

        
}

createTable()