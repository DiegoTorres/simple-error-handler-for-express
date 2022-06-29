const { BaseError } = require('./BaseError');

class Forbidden extends BaseError {
  constructor(message) {
    super(message, 403);
    this.message = this.message ? this.message : 'Forbidden!';
    this.name = 'Forbidden';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  Forbidden,
};
