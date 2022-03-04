"use strict";

var Joi = require('joi');

exports.validate = function (data) {
  var UserroleSchemaValidation = Joi.object({
    name: Joi.string().min(3).max(366).required(),
    description: Joi.string().min(3).max(366).required()
  });
  return UserroleSchemaValidation.validate(data);
};