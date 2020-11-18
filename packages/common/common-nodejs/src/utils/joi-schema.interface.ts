import { ObjectSchema } from '@hapi/joi';

export interface JoiSchema {
  create: ObjectSchema,
  search: ObjectSchema,
  update: ObjectSchema,
  delete: ObjectSchema
}