import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createAddressSchema = object({
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  addressFullName: Joi.string(),
  addressPhone: Joi.string(),
  cityId: Joi.string().required()
});

const searchAddressSchema = object({
  id: Joi.string(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  addressFullName: Joi.string(),
  addressPhone: Joi.string(),
  cityId: Joi.string()
});

const updateAddressSchema = object({
  id: Joi.string().required(),
  addressLine1: Joi.string(),
  addressLine2: Joi.string(),
  addressZipCode: Joi.string(),
  addressFullName: Joi.string(),
  addressPhone: Joi.string(),
  cityId: Joi.string()
});

const deleteAddressSchema = object({
  _id: Joi.string().required()
});

export const addressJoiSchema: JoiSchema = ({
  create: createAddressSchema,
  search: searchAddressSchema,
  update: updateAddressSchema,
  delete: deleteAddressSchema
});