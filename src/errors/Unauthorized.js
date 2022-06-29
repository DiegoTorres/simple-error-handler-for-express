const { BaseError } = require('./BaseError');

class Unauthorized extends BaseError {
  constructor(message) {
    super(message, 401);
    this.message = this.message ? this.message : 'Unauthorized!';
    this.name = 'Unauthorized';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  Unauthorized,
};
