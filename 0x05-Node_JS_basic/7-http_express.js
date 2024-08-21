const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
      let students = 0;
      const fieldCounts = {};
      const listOfStudentsbyfield = {};

      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i] !== '') {
          students += 1;
          const values = lines[i].trim().split(',');
          const field = values[values.length - 1];
          const firstname = values[0];

          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
            listOfStudentsbyfield[field].push(firstname);
          } else {
            fieldCounts[field] = 1;
            listOfStudentsbyfield[field] = [firstname];
          }
        }
      }

      let output = `Number of students: ${students}\n`;

      for (const field in fieldCounts) {
        if (Object.hasOwn(fieldCounts, field)) {
          output += `Number of students in ${field}: ${fieldCounts[field]}. List: ${listOfStudentsbyfield[field].join(', ')}\n`;
        }
      }

      resolve(output.trim());
    }
  });
});

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  const databasePath = process.argv[2];

  if (databasePath) {
    countStudents(databasePath)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } else {
    res.end('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
