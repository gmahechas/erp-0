import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createTypeIdentificationSchema = object({
  typeIdentificationDescription: Joi.string().min(3).max(30).required(),
  typeIdentificationCode: Joi.string().min(3).max(30).required()
});

const searchTypeIdentificationSchema = object({
  id: Joi.string(),
  typeIdentificationDescription: Joi.string().min(3).max(30),
  typeIdentificationCode: Joi.string().min(3).max(30)
});

const updateTypeIdentificationSchema = object({
  id: Joi.string().required(),
  typeIdentificationDescription: Joi.string().min(3).max(30),
  typeIdentificationCode: Joi.string().min(3).max(30)
});

const deleteTypeIdentificationSchema = object({
  _id: Joi.string().required()
});

export const typeIdentificationJoiSchema: JoiSchema = ({
  create: createTypeIdentificationSchema,
  search: searchTypeIdentificationSchema,
  update: updateTypeIdentificationSchema,
  delete: deleteTypeIdentificationSchema
});