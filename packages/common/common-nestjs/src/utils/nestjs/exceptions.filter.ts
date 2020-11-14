import { Catch, ExceptionFilter, RpcExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

import { Observable, throwError } from 'rxjs';

import {
  CustomError,
  DatabaseConnectionError,
  MicroserviceConnectionError,
  RequestValidationError
} from '../../errors';

@Catch(DatabaseConnectionError, RequestValidationError, MicroserviceConnectionError)
export class GraphQLExceptionsFilter implements ExceptionFilter {
  catch(exception: CustomError): CustomError {
    return exception;
  }
}

@Catch(RpcException)
export class GrpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException): Observable<any>  {
    return throwError(exception.getError());
  }
}