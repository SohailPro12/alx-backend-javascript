const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    let students = 0;
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] !== '') {
        students += 1;
      }
    }
    console.log(`Number of students: ${students}`);

    // Extract the headers (first line)
    const headers = lines[0].trim().split(',');

    // Convert each remaining line into an object
    const objects = lines.slice(1).map((line) => {
      const values = line.trim().split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });

    const fieldCounts = {};

    // Iterate over the array of objects
    const listOfStudentsbyfield = {};
    objects.forEach((student) => {
      const { field } = student;

      // If the field is already in the fieldCounts object, increment the count
      if (fieldCounts[field]) {
        fieldCounts[field] += 1;
        listOfStudentsbyfield[field].push(student.firstname);
      } else {
        // Otherwise, initialize the count for that field
        fieldCounts[field] = 1;
        listOfStudentsbyfield[field] = [student.firstname];
      }
    });
    for (const field in fieldCounts) {
      if (Object.hasOwn(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${listOfStudentsbyfield[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
