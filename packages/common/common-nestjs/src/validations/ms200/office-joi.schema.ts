import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createOfficeSchema = object({
  officeName: Joi.string().min(3).max(30).required(),
  companyId: Joi.string().required(),
  addressId: Joi.string().required()
});

const searchOfficeSchema = object({
  id: Joi.string(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string(),
  addressId: Joi.string()
});

const updateOfficeSchema = object({
  id: Joi.string().required(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string()
});

const deleteOfficeSchema = object({
  _id: Joi.string().required()
});

export const officeJoiSchema: JoiSchema = ({
  create: createOfficeSchema,
  search: searchOfficeSchema,
  update: updateOfficeSchema,
  delete: deleteOfficeSchema
});