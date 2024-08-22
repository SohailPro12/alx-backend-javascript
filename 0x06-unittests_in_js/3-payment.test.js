const sinon = require('sinon');
const { expect } = require('chai');
const { calculateNumber } = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with the correct arguments and display the correct message', () => {
    const spy = sinon.spy(calculateNumber);

    const originalCalculateNumber = require('./utils').calculateNumber;
    require('./utils').calculateNumber = spy;
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    require('./utils').calculateNumber = originalCalculateNumber;
    consoleSpy.restore();
  });
});
