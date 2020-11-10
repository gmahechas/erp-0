import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createCompanySchema = object({
  companyName: Joi.string().min(3).max(30).required(),
  companyIdentification: Joi.string().min(2).max(30).required(),
  companyKey: Joi.string().min(3).max(8).required(),
  cityId: Joi.string().required(),
  addressId: Joi.string().required()
});

const searchCompanySchema = object({
  id: Joi.string(),
  companyName: Joi.string().min(3).max(30).required(),
  companyIdentification: Joi.string().min(2).max(30).required(),
  companyKey: Joi.string().min(3).max(8).required(),
  cityId: Joi.string(),
  addressId: Joi.string()
});

const updateCompanySchema = object({
  id: Joi.string().required(),
  companyName: Joi.string().min(3).max(30),
  companyIdentification: Joi.string().min(2).max(30),
  companyKey: Joi.string().min(3).max(8),
  cityId: Joi.string(),
  addressId: Joi.string()
});

const deleteCompanySchema = object({
  _id: Joi.string().required()
});

export const companyJoiSchema: JoiSchema = ({
  create: createCompanySchema,
  search: searchCompanySchema,
  update: updateCompanySchema,
  delete: deleteCompanySchema
});