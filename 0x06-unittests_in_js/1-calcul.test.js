const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 4.5 and the type is SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return 5 when inputs are 6 and 1 and the type is SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 6, 1), 5);
  });

  it('should return 5 when inputs are 10 and 2 and the type is DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should return Error when inputs are 7 and 0 and the type is DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'Error');
  });
});
