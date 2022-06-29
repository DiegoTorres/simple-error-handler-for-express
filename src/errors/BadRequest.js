const { BaseError } = require('./BaseError');

class BadRequest extends BaseError {
  constructor(message) {
    super(message, 400);
    this.message = this.message ? this.message : "Can't find the given url on this server!";
    this.name = 'BadRequest';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  BadRequest,
};
