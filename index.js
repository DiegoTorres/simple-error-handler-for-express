const { BaseError } = require('./src/errors/BaseError');
const { BadGateway } = require('./src/errors/BadGateway');
const { BadRequest } = require('./src/errors/BadRequest');
const { Conflict } = require('./src/errors/Conflict');
const { Forbidden } = require('./src/errors/Forbidden');
const { InternalServerError } = require('./src/errors/InternalServerError');
const { MethodNotAllowed } = require('./src/errors/MethodNotAllowed');
const { NotAcceptable } = require('./src/errors/NotAcceptable');
const { NotFound } = require('./src/errors/NotFound');
const { ResponseError } = require('./src/errors/ResponseError');
const { Unauthorized } = require('./src/errors/Unauthorized');
const { Unprocessable } = require('./src/errors/Unprocessable');
const { PaymentRequired } = require('./src/errors/PaymentRequired');
const { errorHandler } = require('./src/errorHandler');

module.exports = {
  BaseError,
  BadGateway,
  BadRequest,
  Conflict,
  Forbidden,
  InternalServerError,
  MethodNotAllowed,
  NotAcceptable,
  NotFound,
  ResponseError,
  Unauthorized,
  Unprocessable,
  PaymentRequired,
  errorHandler,
}