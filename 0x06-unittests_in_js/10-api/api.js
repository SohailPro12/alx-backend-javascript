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
// Route for the status page
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});
// Route for the checkout page
app.post('/login', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
