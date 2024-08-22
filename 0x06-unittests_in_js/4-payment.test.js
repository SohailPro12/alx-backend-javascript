const sinon = require('sinon');
const { expect } = require('chai');
const { calculateNumber } = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with the correct arguments, stub the return value, and log the correct message', () => {

    const stub = sinon.stub(calculateNumber);
    stub.returns(10);

    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
