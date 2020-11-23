import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createTypeIdentificationSchema = object({
  typeIdentificationDescription: Joi.string().min(2).max(64).required(),
  typeIdentificationCode: Joi.string().min(2).max(8).required()
});

const searchTypeIdentificationSchema = object({
  id: Joi.string(),
  typeIdentificationDescription: Joi.string().min(2).max(64),
  typeIdentificationCode: Joi.string().min(2).max(8)
});

const updateTypeIdentificationSchema = object({
  id: Joi.string().required(),
  typeIdentificationDescription: Joi.string().min(2).max(64),
  typeIdentificationCode: Joi.string().min(2).max(8)
});

const deleteTypeIdentificationSchema = object({
  id: Joi.string().required()
});

export const typeIdentificationJoiSchema: JoiSchema = ({
  create: createTypeIdentificationSchema,
  search: searchTypeIdentificationSchema,
  update: updateTypeIdentificationSchema,
  delete: deleteTypeIdentificationSchema
});