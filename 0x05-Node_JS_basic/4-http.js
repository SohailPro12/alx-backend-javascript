const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  // res.end('Hello Holberton School!');
  res.write(Buffer.from(responseText));
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1245/');
});
module.exports = app;
