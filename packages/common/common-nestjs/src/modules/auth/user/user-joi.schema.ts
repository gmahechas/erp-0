import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createUserSchema = object({
  userName: Joi.string().min(3).max(30).required(),
  userPassword: Joi.string().min(3).max(30).required(),
  personId: Joi.string().required()
});

const searchUserSchema = object({
  id: Joi.string(),
  userName: Joi.string().min(3).max(30),
  personId: Joi.string()
});

const updateUserSchema = object({
  id: Joi.string().required(),
  userName: Joi.string().min(3).max(30),
  userPassword: Joi.string().min(3).max(30),
  personId: Joi.string()
});

const deleteUserSchema = object({
  id: Joi.string().required()
});

export const userJoiSchema: JoiSchema = ({
  create: createUserSchema,
  search: searchUserSchema,
  update: updateUserSchema,
  delete: deleteUserSchema
});