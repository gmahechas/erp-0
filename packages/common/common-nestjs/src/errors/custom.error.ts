import { ErrorResponse } from './error-response.interface';

export abstract class CustomError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): ErrorResponse[];
}