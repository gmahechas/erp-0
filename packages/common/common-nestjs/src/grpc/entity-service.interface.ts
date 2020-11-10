import { Observable } from 'rxjs';

import { IEntityOne } from './entity-one.interface';
import { IEntityMany } from './entity-many.interface';

export interface IEntityService<T> {
  createOne(data: IEntityOne<T>): Observable<IEntityOne<T>>;
  updateOne(data: IEntityOne<T>): Observable<IEntityOne<T>>;
  deleteOne(data: IEntityOne<T>): Observable<IEntityOne<T>>;
  searchById(data: IEntityOne<T>): Observable<IEntityOne<T>>;
  searchMany(data: IEntityMany<T>): Observable<IEntityMany<T>>;
}