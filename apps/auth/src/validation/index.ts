import * as Joi from 'joi';

export const validationSchema = Joi.object({
  MONGODB_URI: Joi.string().required().messages({
    'string.empty': 'MONGODB_URI is required',
  }),
  JWT_SECRET: Joi.string().required().messages({
    'string.empty': 'JWT_SECRET is required',
  }),
  JWT_EXPIRATION: Joi.string().required().messages({
    'string.empty': 'JWT_EXPIRATION is required',
  }),
  PORT: Joi.number().required().messages({
    'number.base': 'PORT must be a number',
    'number.empty': 'PORT is required',
  }),
});
