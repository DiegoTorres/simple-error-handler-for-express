const { BaseError } = require('./errors/BaseError');

const { InternalServerError } = require('./errors/InternalServerError');

const errorHandler = (err, req, res, next) => {
  console.trace(err.stack);

  let error = err;
  res.removeHeader('X-Powered-By');
  res.removeHeader('Server');

  if (!(err instanceof BaseError)) error = new InternalServerError(err.message);

  return res.status(error.statusCode).json(error.serializedError());
};

module.exports = {
  errorHandler,
};
