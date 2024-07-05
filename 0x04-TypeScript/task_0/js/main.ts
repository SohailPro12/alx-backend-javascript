interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "Sohail",
  lastName: "charef",
  age: 19,
  location: "Belgium"
}

let student2: Student = {
  firstName: "Melina",
  lastName: "charef",
  age: 19,
  location: "France"
}

let studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Get the table container (make sure it exists in the HTML)
  const tableContainer = document.getElementById('students-table');

  if (tableContainer) {
    // Create the table element
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.border = '1px solid #ccc';

    // Create the table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    th1.textContent = 'First Name';
    th2.textContent = 'Location';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);

    // Create the table body
    const tbody = table.createTBody();

    // Iterate over the students list and create a row for each student
    students.forEach((student) => {
      const row = tbody.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });

    // Append the table to the container
    tableContainer.appendChild(table);
  } else {
    console.error('Table container element not found!');
  }
}

// Render the table
renderTable(studentsList);