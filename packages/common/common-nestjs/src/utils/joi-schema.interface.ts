import { ObjectSchema } from 'joi';

export interface JoiSchema {
  create: ObjectSchema,
  search: ObjectSchema,
  update: ObjectSchema,
  delete: ObjectSchema
}