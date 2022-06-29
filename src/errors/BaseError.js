class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'BaseError';
    this.stack = null;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'FAIL' : 'ERROR';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  serializedError() {
    return {
      errors: [
        {
          message: this.message,
          field: '',
        },
      ],
    };
  }
}

module.exports = {
  BaseError,
};
