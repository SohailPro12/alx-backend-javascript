const express = require('express');

const app = express();

// Route for the index page
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
// Route for the payment page
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
