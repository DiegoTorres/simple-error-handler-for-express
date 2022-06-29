const { BaseError } = require('./BaseError');

class PaymentRequired extends BaseError {
  constructor(message) {
    super(message, 402);
    this.message = this.message ? this.message : 'PaymentRequired error';
    this.name = 'PaymentRequired';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  PaymentRequired,
};
