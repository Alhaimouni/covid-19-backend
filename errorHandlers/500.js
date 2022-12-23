'use strict';

module.exports = function (err, req, res, next) {
  res.status(500).send({
    msg: `${err}`,
    code: 500
  })
}