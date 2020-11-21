import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createAddressSchema = object({
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string().required()
});

const searchAddressSchema = object({
  id: Joi.string(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string()
});

const updateAddressSchema = object({
  id: Joi.string().required(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  cityId: Joi.string()
});

const deleteAddressSchema = object({
  id: Joi.string().required()
});

export const addressJoiSchema: JoiSchema = ({
  create: createAddressSchema,
  search: searchAddressSchema,
  update: updateAddressSchema,
  delete: deleteAddressSchema
});