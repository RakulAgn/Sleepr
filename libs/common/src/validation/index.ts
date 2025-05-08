import * as Joi from 'joi';

export const PaymentValidationSchema = Joi.object({
  PORT: Joi.number().required().messages({
    'number.base': 'PORT must be a number',
    'number.empty': 'PORT is required',
  }),
  NOTIFICATION_PORT: Joi.number().required().messages({
    'number.base': 'NOTIFICATION_PORT must be a number',
    'number.empty': 'NOTIFICATION_PORT is required',
  }),
  NOTIFICATION_HOST: Joi.string().required().messages({
    'string.empty': 'NOTIFICATION_HOST is required',
  }),
  STRIPE_SECRET_KEY: Joi.string().required().messages({
    'string.empty': 'STRIPE_SECRET_KEY is required',
  }),
});

export const AuthValidationSchema = Joi.object({
  MONGODB_URI: Joi.string().required().messages({
    'string.empty': 'MONGODB_URI is required',
  }),
  JWT_SECRET: Joi.string().required().messages({
    'string.empty': 'JWT_SECRET is required',
  }),
  JWT_EXPIRATION: Joi.string().required().messages({
    'string.empty': 'JWT_EXPIRATION is required',
  }),
  HTTP_PORT: Joi.number().required().messages({
    'number.base': 'PORT must be a number',
    'number.empty': 'PORT is required',
  }),
  TCP_PORT: Joi.number().required().messages({
    'number.base': 'TCP_PORT must be a number',
    'number.empty': 'TCP_PORT is required',
  }),
});

export const ReservationValidationSchema = Joi.object({
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

export const NotificationValidationSchema = Joi.object({
  PORT: Joi.number().required().messages({
    'number.base': 'PORT must be a number',
    'number.empty': 'PORT is required',
  }),
});
