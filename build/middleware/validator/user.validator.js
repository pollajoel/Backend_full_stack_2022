"use strict";

var Joi = require('joi');

exports.validate = function (data) {
  var UserSchemaValidation = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    firstname: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    is_admin: Joi["boolean"]().required(),
    email: Joi.string().required(),
    phone: Joi.string(),
    postal_code: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    userroleId: Joi.number().integer().required()
  });
  return UserSchemaValidation.validate(data);
};