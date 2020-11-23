import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createCountrySchema = object({
  countryName: Joi.string().min(3).max(30).required(),
  countryCode: Joi.string().min(2).max(3).required()
});

const searchCountrySchema = object({
  id: Joi.string(),
  countryName: Joi.string().min(3).max(30),
  countryCode: Joi.string().min(2).max(3)
});

const updateCountrySchema = object({
  id: Joi.string().required(),
  countryName: Joi.string().min(3).max(30),
  countryCode: Joi.string().min(2).max(3)
});

const deleteCountrySchema = object({
  id: Joi.string().required()
});

export const countryJoiSchema: JoiSchema = ({
  create: createCountrySchema,
  search: searchCountrySchema,
  update: updateCountrySchema,
  delete: deleteCountrySchema
});
