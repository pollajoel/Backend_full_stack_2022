const Joi = require('joi');

exports.validate = function (data){
    const StatutSchemaValidation = Joi.object({
      name: Joi.string().min(3).max(366).required(),
      description: Joi.string().min(3).max(366).required()
    });
    return StatutSchemaValidation.validate(data);
}