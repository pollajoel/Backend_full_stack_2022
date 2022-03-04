"use strict";

var Joi = require('joi');

exports.validate = function (data) {
  var TaskSchemaValidation = Joi.object({
    name: Joi.string().min(3).max(366).required(),
    description: Joi.string().min(3).max(366).required(),
    start_date: Joi.string().required(),
    end_date: Joi.string().required(),
    statutId: Joi.number().integer().required(),
    userId: Joi.number().integer().required()
  });
  return TaskSchemaValidation.validate(data);
};