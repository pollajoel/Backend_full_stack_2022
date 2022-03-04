const Joi = require('joi');

exports.validate = function (data){
    const ProjectSchemaValidation = Joi.object({
      title: Joi.string().min(3).max(366).required(),
      description: Joi.string().min(3).max(366).required(),
      start_date: Joi.string().required(),
      end_date: Joi.string().required(),
      statutId: Joi.number().integer().required(),
	    userId: Joi.number().integer().required()
    });
    return ProjectSchemaValidation.validate(data);
}