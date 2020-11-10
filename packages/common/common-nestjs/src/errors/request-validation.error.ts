import { CustomError } from './custom.error';
import { ErrorResponse } from './error-response.interface';

export class RequestValidationError extends CustomError {
  constructor(public errors: ErrorResponse[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors;
  };
}