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
