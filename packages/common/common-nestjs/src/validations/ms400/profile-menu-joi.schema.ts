import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../validations/joi-schema.interface';

const createProfileMenuSchema = object({
  profileMenuStatus: Joi.boolean().required(),
  menuId: Joi.string().required(),
  profileId: Joi.string().required()
});

const searchProfileMenuSchema = object({
  id: Joi.string(),
  profileMenuStatus: Joi.boolean(),
  menuId: Joi.string(),
  profileId: Joi.string()
});

const updateProfileMenuSchema = object({
  id: Joi.string().required(),
  profileMenuStatus: Joi.boolean(),
  menuId: Joi.string(),
  profileId: Joi.string()
});

const deleteProfileMenuSchema = object({
  _id: Joi.string().required()
});

export const profileMenuJoiSchema: JoiSchema = ({
  create: createProfileMenuSchema,
  search: searchProfileMenuSchema,
  update: updateProfileMenuSchema,
  delete: deleteProfileMenuSchema
});