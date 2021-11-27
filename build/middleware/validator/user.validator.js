const Joi = require('joi');
const joi = require('joi');

exports.validate = function (data){
    const UserSchemaValidation = joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      firstname: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      is_admin: joi.boolean().required(),
      email: Joi.string().required(),
      phone: Joi.string(),
      postal_code: Joi.string(),
      city: Joi.string(),
      country: Joi.string()
    });
    return UserSchemaValidation.validate(data);
}