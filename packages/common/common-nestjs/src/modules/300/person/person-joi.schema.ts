import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createPersonSchema = object({
  personIdentification: Joi.string().min(2).max(64).required(),
  personFirstName: Joi.string().min(2).max(64).allow(null),
  personSecondName: Joi.string().min(2).max(64).allow(null),
  personFirstSurname: Joi.string().min(2).max(64).allow(null),
  personSecondSurname: Joi.string().min(2).max(64).allow(null),
  personCompanyName: Joi.string().min(2).max(128).allow(null),
  companyId: Joi.string().required(),
  typePersonId: Joi.string().required(),
  typeIdentificationId: Joi.string().required()
});

const searchPersonSchema = object({
  id: Joi.string(),
  personIdentification: Joi.string().min(2).max(64),
  personCompanyName: Joi.string().min(2).max(128),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
});

const updatePersonSchema = object({
  id: Joi.string().required(),
  personIdentification: Joi.string().min(2).max(64),
  personFirstName: Joi.string().min(2).max(64).allow(null),
  personSecondName: Joi.string().min(2).max(64).allow(null),
  personFirstSurname: Joi.string().min(2).max(64).allow(null),
  personSecondSurname: Joi.string().min(2).max(64).allow(null),
  personCompanyName: Joi.string().min(2).max(128).allow(null),
  companyId: Joi.string(),
  typePersonId: Joi.string(),
  typeIdentificationId: Joi.string()
});

const deletePersonSchema = object({
  id: Joi.string().required()
});

export const personJoiSchema: JoiSchema = ({
  create: createPersonSchema,
  search: searchPersonSchema,
  update: updatePersonSchema,
  delete: deletePersonSchema
});