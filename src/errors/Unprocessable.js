const { BaseError } = require('./BaseError');

class Unprocessable extends BaseError {
  constructor(message) {
    super(message, 422);
    this.message = this.message ? this.message : 'Unprocessable!';
    this.name = 'Unprocessable';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  Unprocessable,
};
