# simple-error-handler-for-express

## Getting Started

Install it using [`npm`](https://www.npmjs.com/package/@diegoti/simple-error-handler-for-express):

```bash
npm i @diegoti/simple-error-handler-for-express
```
## USAGE

Import errorHandler from simple-error-handler-for-express in your node app.

```javascript
const express = require('express');
require('express-async-errors');

const { errorHandler } = require('@diegoti/simple-error-handler-for-express');
```

Add errorHandler to your express app and that's it.

```javascript
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);

app.use(errorHandler);
```

Example of route

```javascript
const express = require('express');
const { ResponseError } = require("@diegoti/simple-error-handler-for-express");

const router = express.Router();

router.post('/', function (req, res, next) {
  const responseError = new ResponseError();

  if (!req.body.name) {
    responseError.errors.push({
      field: 'name',
      message: 'Name: error message!',
    });
  }

  if (responseError.errors.length) throw responseError;

  res.status(200).json({ message: 'ok' });
});

module.exports = router;
```

Output example:
status code = 400

```json
{
    "errors": [
        {
            "message": "Name: error message!",
            "field": "name"
        }
    ]
}
```

Available Error Objects
-----------------
* BaseError
  * BadGateway
  * BadRequest
  * Conflict
  * Forbidden
  * InternalServerError
  * MethodNotAllowed
  * NotAcceptable
  * NotFound
  * ResponseError
  * Unauthorized
  * Unprocessable
  * PaymentRequired