const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      assert.deepStrictEqual(response, { data: 'Successful response from the API' });
      done(); // Call done to signal that the test is complete
    }).catch(done); // Catch any errors and pass them to done
  });
});
