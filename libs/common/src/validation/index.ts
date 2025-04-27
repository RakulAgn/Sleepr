import * as Joi from 'joi';

export const validationSchema = Joi.object({
  MONGODB_URI: Joi.string().required().messages({
    'string.empty': 'MONGODB_URI is required',
  }),
});
