const fs = require('fs');
const http = require('http');

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const databasePath = process.argv[2];

    if (databasePath) {
      countStudents(databasePath)
        .then((output) => {
          res.end(output);
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(error.message);
        });
    } else {
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
