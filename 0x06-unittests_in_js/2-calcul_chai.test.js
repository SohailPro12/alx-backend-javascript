const expect = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 4.5 and the type is SUM', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return 5 when inputs are 6 and 1 and the type is SUBTRACT', function() {
    expect(calculateNumber('SUBTRACT', 6, 1)).to.equal(5);
  });

  it('should return 5 when inputs are 10 and 2 and the type is DIVIDE', function() {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
  });

  it('should return Error when inputs are 7 and 0 and the type is DIVIDE', function() {
    expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
  });
});
