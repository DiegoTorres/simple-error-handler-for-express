const { BaseError } = require('./BaseError');

class MethodNotAllowed extends BaseError {
  constructor(message) {
    super(message, 405);
    this.message = this.message ? this.message : 'MethodNotAllowed';
    this.name = 'MethodNotAllowed';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  MethodNotAllowed,
};
