import Joi, { object } from 'joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createUserProfileSchema = object({
  userProfileStatus: Joi.boolean().required(),
  userId: Joi.string().required(),
  profileId: Joi.string().required()
});

const searchUserProfileSchema = object({
  id: Joi.string(),
  userProfileStatus: Joi.boolean(),
  userId: Joi.string(),
  profileId: Joi.string().required()
});

const updateUserProfileSchema = object({
  id: Joi.string().required(),
  userProfileStatus: Joi.boolean(),
  userId: Joi.string(),
  profileId: Joi.string().required()
});

const deleteUserProfileSchema = object({
  id: Joi.string().required()
});

export const userProfileJoiSchema: JoiSchema = ({
  create: createUserProfileSchema,
  search: searchUserProfileSchema,
  update: updateUserProfileSchema,
  delete: deleteUserProfileSchema
});