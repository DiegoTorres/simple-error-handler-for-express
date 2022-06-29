const { BaseError } = require('./BaseError');

class NotAcceptable extends BaseError {
  constructor(message) {
    super(message, 406);
    this.message = this.message ? this.message : 'NotAcceptable error';
    this.name = 'NotAcceptable';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  NotAcceptable,
};
