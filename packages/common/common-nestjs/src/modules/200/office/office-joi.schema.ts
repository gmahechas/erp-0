import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOfficeSchema = object({
  officeName: Joi.string().min(3).max(30).required(),
  companyId: Joi.string().required()
});

const searchOfficeSchema = object({
  id: Joi.string(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string()
});

const updateOfficeSchema = object({
  id: Joi.string().required(),
  officeName: Joi.string().min(3).max(30),
  companyId: Joi.string()
});

const deleteOfficeSchema = object({
  id: Joi.string().required()
});

export const officeJoiSchema: JoiSchema = ({
  create: createOfficeSchema,
  search: searchOfficeSchema,
  update: updateOfficeSchema,
  delete: deleteOfficeSchema
});