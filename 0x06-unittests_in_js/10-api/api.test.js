const request = require('request');
const assert = require('assert');

describe('Index page', () => {
  it('should return status code 200 and correct message', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 and correct message for valid id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, 'Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for invalid id', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      assert.strictEqual(response.statusCode, 404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('should return status code 200 and correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      assert.deepStrictEqual(JSON.parse(body), {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('should return status code 200 and correct welcome message', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: JSON.stringify({ userName: 'Betty' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }, (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, 'Welcome Betty');
      done();
    });
  });
});
