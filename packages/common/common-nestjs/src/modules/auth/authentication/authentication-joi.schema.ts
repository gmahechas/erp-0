import Joi, { object, ObjectSchema } from 'joi';

export const loginRequestSchema: ObjectSchema = object({
  userName: Joi.string().min(3).max(30).required(),
  userPassword: Joi.string().min(3).max(30).required()
});