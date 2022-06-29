const { BaseError } = require('./BaseError');

class InternalServerError extends BaseError {
  constructor(message) {
    super(message, 500);
    this.message = this.message ? this.message : 'InternalServerError.';
    this.name = 'InternalServerError';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  InternalServerError,
};
