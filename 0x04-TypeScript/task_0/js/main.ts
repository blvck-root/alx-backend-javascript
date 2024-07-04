export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const xhanti: Student = {
  firstName: "Xhanti",
  lastName: "Nokwali",
  age: 27,
  location: "Capetown",
}

const kabza: Student = {
  firstName: "Kabelo",
  lastName: "Motha",
  age: 32,
  location: "Johannesburg",
}

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

const students: Array<Student> = [kabza, xhanti];

export function displayStudents(students: Array<Student>): void {
  let table = document.createElement("table");
  let tableHeader = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  let row = document.createElement("tr");
  let colNames = ["First Name", "Location"];
  let keys = ["firstName", "location"];

  colNames.forEach((colName) => {
    let col = document.createElement("th");
    col.innerText = colName;
    row.appendChild(col);
  });

  tableHeader.appendChild(row);
  table.appendChild(tableHeader);

  students.forEach((student) => {
    let row = document.createElement("tr");
    keys.forEach((key) => {
      let col = document.createElement("td");
      col.innerText = student[key];
      row.appendChild(col);
    });
    tableBody.appendChild(row)
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

displayStudents(students);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = "Task 0";
