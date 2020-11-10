import 'reflect-metadata';
import { Injectable, PipeTransform } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { ObjectSchema, ValidationResult, } from '@hapi/joi';
import { RequestValidationError } from '../errors/request-validation.error';

@Injectable()
export class GraphQLJoiValidationPipe implements PipeTransform {
  
  constructor(private schema: ObjectSchema) { }

  transform<T>(values: T): T {
    const { error }: ValidationResult = this.schema.validate(values, { abortEarly: false });
    if (error) {
      const errors = error.details.map(error => ({
        message: error.message,
        field: error.context!.key
      }));
      throw new RequestValidationError(errors);
    }
    return values;
  }
}

@Injectable()
export class GrpcJoiValidationPipe implements PipeTransform {

  constructor(private schema: ObjectSchema) { }

  transform(values: any) {
    const newValues = values['entity'];
    if (newValues) {
      const { error }: ValidationResult = this.schema.validate(newValues, { abortEarly: false });
      if (error) {
        throw new RpcException({ code: 3 })
      }
      return values;
    }
  }
}
