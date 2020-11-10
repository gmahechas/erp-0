import { CustomError } from './custom.error';

export class MicroserviceConnectionError extends CustomError {
  reason = 'Error connecting to microservice';
  constructor() {
    super();
    Object.setPrototypeOf(this, MicroserviceConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  };
}