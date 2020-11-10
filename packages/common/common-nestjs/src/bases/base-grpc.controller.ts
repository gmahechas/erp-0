import { UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { Observable } from 'rxjs';

import { IEntityService, IEntityOne, IEntityMany } from './../grpc';
import { JoiSchema } from './../validations/joi-schema.interface';
import { GrpcJoiValidationPipe } from './../pipes/index';

export function BaseGrpcController<A>(serviceName: string, schemaValidation: JoiSchema): any {

  abstract class BaseGrpcControllerHost {
    
    constructor(
      private readonly entityService: IEntityService<A>
    ) { }

    @GrpcMethod(serviceName)
    @UsePipes(new GrpcJoiValidationPipe(schemaValidation.create))
    createOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return this.entityService.createOne(data);
    }

    @GrpcMethod(serviceName)
    @UsePipes(new GrpcJoiValidationPipe(schemaValidation.update))
    updateOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return this.entityService.updateOne(data);
    }

    @GrpcMethod(serviceName)
    @UsePipes(new GrpcJoiValidationPipe(schemaValidation.delete))
    deleteOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return this.entityService.deleteOne(data);
    }

    @GrpcMethod(serviceName)
    @UsePipes(new GrpcJoiValidationPipe(schemaValidation.search))
    searchById(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return this.entityService.searchById(data);
    }
    
    @GrpcMethod(serviceName)
    searchMany(data: IEntityMany<A>): Observable<IEntityMany<A>> {
      return this.entityService.searchMany(data);
    }

  }

  return BaseGrpcControllerHost;
}