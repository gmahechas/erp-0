import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createProfileSchema = object({
  profileName: Joi.string().min(3).max(30).required(),
  profileDescription: Joi.string().min(3).max(30).required()
});

const searchProfileSchema = object({
  id: Joi.string(),
  profileName: Joi.string().min(3).max(30).required()
});

const updateProfileSchema = object({
  id: Joi.string().required(),
  profileName: Joi.string().min(3).max(30),
  profileDescription: Joi.string().min(3).max(30)
});

const deleteProfileSchema = object({
  _id: Joi.string().required()
});

export const profileJoiSchema: JoiSchema = ({
  create: createProfileSchema,
  search: searchProfileSchema,
  update: updateProfileSchema,
  delete: deleteProfileSchema
});