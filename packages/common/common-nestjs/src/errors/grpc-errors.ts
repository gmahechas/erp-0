import { CustomError } from './custom.error'
import { MicroserviceConnectionError } from './microservice-connection.error'
import { RequestValidationError } from './request-validation.error'

export const grpcErrors = (grpcErrorCode: number): CustomError => {
  switch (grpcErrorCode) {
    case 3:
      return new RequestValidationError([{ message: 'validation.error' }])
    case 14:
      return new MicroserviceConnectionError()
    default:
      return new MicroserviceConnectionError()
  }
} 