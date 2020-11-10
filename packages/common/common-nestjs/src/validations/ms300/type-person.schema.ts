import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createTypePersonSchema = object({
  typePersonDescription: Joi.string().min(3).max(30).required(),
  typePersonCode: Joi.string().min(3).max(30).required()
});

const searchTypePersonSchema = object({
  id: Joi.string(),
  typePersonDescription: Joi.string().min(3).max(30),
  typePersonCode: Joi.string().min(3).max(30)
});

const updateTypePersonSchema = object({
  id: Joi.string().required(),
  typePersonDescription: Joi.string().min(3).max(30),
  typePersonCode: Joi.string().min(3).max(30)
});

const deleteTypePersonSchema = object({
  _id: Joi.string().required()
});

export const typePersonJoiSchema: JoiSchema = ({
  create: createTypePersonSchema,
  search: searchTypePersonSchema,
  update: updateTypePersonSchema,
  delete: deleteTypePersonSchema
});