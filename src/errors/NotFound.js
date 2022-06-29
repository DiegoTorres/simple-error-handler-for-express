const { BaseError } = require('./BaseError');

class NotFound extends BaseError {
  constructor(message) {
    super(message, 404);
    this.message = this.message ? this.message : "Can't find the given url on this server!";
    this.name = 'NotFound';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = {
  NotFound,
};
