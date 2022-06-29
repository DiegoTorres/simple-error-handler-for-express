const { BaseError } = require('./BaseError');

class ResponseError extends BaseError {
  constructor(errors) {
    super('ResponseError - validation errors', 400);
    this.name = 'ResponseError';
    this.errors = errors || [];
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  serializedError() {
    const errors = this.errors.map((it) => ({
      message: it.message,
      field: it.field,
    }));

    return {
      errors,
    };
  }
}

module.exports = {
  ResponseError,
};
