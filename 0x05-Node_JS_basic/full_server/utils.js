const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
      const fieldCounts = {};
      const listOfStudentsbyfield = {};

      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i] !== '') {
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
      resolve(listOfStudentsbyfield);
    }
  });
});
module.exports = readDatabase;
