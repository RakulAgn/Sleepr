import * as Joi from 'joi';

export const validationSchema = Joi.object({
  MONGODB_URI: Joi.string().required().messages({
    'string.empty': 'MONGODB_URI is required',
  }),
  PORT: Joi.number().required().messages({
    'number.base': 'PORT must be a number',
    'number.empty': 'PORT is required',
  }),
  AUTH_HOST: Joi.string().required().messages({
    'string.empty': 'AUTH_HOST is required',
  }),
  PAYMENTS_HOST: Joi.string().required().messages({
    'string.empty': 'PAYMENTS_HOST is required',
  }),
  AUTH_PORT: Joi.number().required().messages({
    'number.base': 'AUTH_PORT must be a number',
    'number.empty': 'AUTH_PORT is required',
  }),
  PAYMENTS_PORT: Joi.number().required().messages({
    'number.base': 'PAYMENTS_PORT must be a number',
    'number.empty': 'PAYMENTS_PORT is required',
  }),
});
