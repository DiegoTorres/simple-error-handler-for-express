const { BaseError } = require('./BaseError');

class Conflict extends BaseError {
  constructor(message) {
    super(message, 409);
    this.message = this.message ? this.message : 'Conflict!';
    this.name = 'Conflict';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  Conflict,
};
