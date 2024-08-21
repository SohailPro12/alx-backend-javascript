const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    try {
      const fields = await readDatabase(filePath);
      let output = 'This is the list of our students\n';

      const sortedFields = Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of sortedFields) {
        const students = fields[field];
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(filePath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
module.exports = StudentsController;
