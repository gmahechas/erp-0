import Joi, { object } from '@hapi/joi';
import { JoiSchema } from '../../../utils/joi-schema.interface';

const createDepartmentSchema = object({
  departmentName: Joi.string().min(3).max(30).required(),
  companyId: Joi.string().required()
});

const searchDepartmentSchema = object({
  id: Joi.string(),
  departmentName: Joi.string().min(3).max(30)
});

const updateDepartmentSchema = object({
  id: Joi.string().required(),
  departmentName: Joi.string().min(3).max(30)
});

const deleteDepartmentSchema = object({
  id: Joi.string().required()
});

export const departmentJoiSchema: JoiSchema = ({
  create: createDepartmentSchema,
  search: searchDepartmentSchema,
  update: updateDepartmentSchema,
  delete: deleteDepartmentSchema
});