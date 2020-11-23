import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  IEntityService,
  IEntityOne,
  IEntityMany,
  grpcErrors,
} from '@gmahechas/common-nestjs';

export function BaseGrpcService<T>(
  packageName: string,
  serviceName: string,
): any {
  abstract class BaseGrpcServiceHost implements OnModuleInit {
    private grpcService!: IEntityService<T>;

    constructor(@Inject(packageName) private readonly grpcClient: ClientGrpc) {}

    onModuleInit(): void {
      this.grpcService = this.grpcClient.getService<IEntityService<T>>(
        serviceName,
      );
    }

    createOne(data: IEntityOne<T>): Observable<IEntityOne<T>> {
      return this.grpcService
        .createOne(data)
        .pipe(catchError((error) => throwError(grpcErrors(error.code))));
    }

    updateOne(data: IEntityOne<T>): Observable<IEntityOne<T>> {
      return this.grpcService
        .updateOne(data)
        .pipe(catchError((error) => throwError(grpcErrors(error.code))));
    }

    deleteOne(data: IEntityOne<T>): Observable<IEntityOne<T>> {
      return this.grpcService
        .deleteOne(data)
        .pipe(catchError((error) => throwError(grpcErrors(error.code))));
    }

    searchById(data: IEntityOne<T>): Observable<IEntityOne<T>> {
      return this.grpcService
        .searchById(data)
        .pipe(catchError((error) => throwError(grpcErrors(error.code))));
    }

    searchMany(data: IEntityMany<T>): Observable<IEntityMany<T>> {
      return this.grpcService
        .searchMany(data)
        .pipe(catchError((error) => throwError(grpcErrors(error.code))));
    }
  }

  return BaseGrpcServiceHost;
}
