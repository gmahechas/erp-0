import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createEstateSchema = object({
  estateName: Joi.string().min(3).max(30).required(),
  estateCode: Joi.string().min(2).max(3).required(),
  countryId: Joi.string().required()
});

const searchEstateSchema = object({
  id: Joi.string(),
  estateName: Joi.string().min(3).max(30),
  estateCode: Joi.string().min(2).max(3),
  countryId: Joi.string()
});

const updateEstateSchema = object({
  id: Joi.string().required(),
  estateName: Joi.string().min(3).max(30),
  estateCode: Joi.string().min(2).max(3),
  countryId: Joi.string()
});

const deleteEstateSchema = object({
  id: Joi.string().required()
});

export const estateJoiSchema: JoiSchema = ({
  create: createEstateSchema,
  search: searchEstateSchema,
  update: updateEstateSchema,
  delete: deleteEstateSchema
});
