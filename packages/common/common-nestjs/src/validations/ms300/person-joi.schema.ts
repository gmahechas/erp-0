import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createPersonSchema = object({
  personFirstName: Joi.string().min(3).max(30).required(),
  personSecondName: Joi.string().min(3).max(30),
  personFirstSurname: Joi.string().min(3).max(30).required(),
  personSecondSurname: Joi.string().min(3).max(30),
  personCompanyName: Joi.string().min(3).max(30),
  companyId: Joi.string().required(),
  typePersonId: Joi.string().required(),
  typeIdentificationId: Joi.string().required()
});

const searchPersonSchema = object({
  id: Joi.string(),
  personCompanyName: Joi.string().min(3).max(30),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
});

const updatePersonSchema = object({
  id: Joi.string().required(),
  personCompanyName: Joi.string().min(3).max(30),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
});

const deletePersonSchema = object({
  _id: Joi.string().required()
});

export const personJoiSchema: JoiSchema = ({
  create: createPersonSchema,
  search: searchPersonSchema,
  update: updatePersonSchema,
  delete: deletePersonSchema
});