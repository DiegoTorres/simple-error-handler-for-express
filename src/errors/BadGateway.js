const { BaseError } = require('./BaseError');

class BadGateway extends BaseError {
  constructor(message) {
    super(message, 502);
    this.message = this.message ? this.message : 'An error occurred while attempting to connect to another server.';
    this.name = 'BadGateway';
    this.isOperational = false;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  BadGateway,
};
