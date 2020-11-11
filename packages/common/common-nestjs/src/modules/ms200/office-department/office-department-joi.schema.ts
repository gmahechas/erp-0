import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createOfficeDepartmentSchema = object({
  officeDepartmentStatus: Joi.boolean().required(),
  officeId: Joi.string().required(),
  departmentId: Joi.string().required()
});

const searchOfficeDepartmentSchema = object({
  id: Joi.string(),
  officeDepartmentStatus: Joi.boolean(),
  officeId: Joi.string(),
  departmentId: Joi.string()
});

const updateOfficeDepartmentSchema = object({
  id: Joi.string().required(),
  officeDepartmentStatus: Joi.boolean(),
  officeId: Joi.string(),
  departmentId: Joi.string()
});

const deleteOfficeDepartmentSchema = object({
  _id: Joi.string().required()
});

export const officeDepartmentJoiSchema: JoiSchema = ({
  create: createOfficeDepartmentSchema,
  search: searchOfficeDepartmentSchema,
  update: updateOfficeDepartmentSchema,
  delete: deleteOfficeDepartmentSchema
});