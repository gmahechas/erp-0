import { Model, Document } from 'mongoose';

import { Observable, from } from 'rxjs';

import { IEntityOne } from '../../grpc/entity-one.interface';

export function BaseMongodbService<A extends Document>(): any {

  abstract class BaseMongodbServiceHost {

    constructor(
      private readonly entityModel: Model<A>
    ) { }

    createOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return from(this._createOneAsync(data));
    }

    updateOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return from(this._updateOneAsync(data));
    }

    deleteOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return from(this._deleteOneAsync(data));
    }

    searchById(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      return from(this._searchByIdAsync(data));
    }

    /*     searchMany(data: IEntityMany<A>): Observable<IEntityMany<A>> {
          return from(this._searchManyAsync(data));
        } */

    async _createOneAsync(data: IEntityOne<A>): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity;
      const model = new this.entityModel(dataEntity);
      return { entity: await model.save() };
    }

    async _updateOneAsync(data: IEntityOne<A>): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity;
      const entity = await this.entityModel.findById(dataEntity.id);
      if (entity) {
        Object.assign(entity, dataEntity);
        const result = await this.entityModel.updateOne({ _id: dataEntity.id }, entity);
        if (result.ok) {
          return { entity };
        } else {
          return { entity: null };
        }
      } else {
        return { entity: null };
      }
    }

    async _deleteOneAsync(data: IEntityOne<A>): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity;
      const entity = await this.entityModel.findById(dataEntity.id);
      if (entity) {
        const result = await this.entityModel.deleteOne({ _id: dataEntity.id });
        if (result.ok) {
          return { entity };
        } else {
          return { entity: null };
        }
      } else {
        return { entity: null };
      }
    }

    async _searchByIdAsync(data: IEntityOne<A>): Promise<IEntityOne<A>> {
      const { ...dataEntity } = data.entity;
      return { entity: await this.entityModel.findById({ _id: dataEntity.id }) };
    }

    /*     async _searchManyAsync(data: IEntityMany<A>): Promise<IEntityMany<A>> {
          const dataEntities = data.entities ? data.entities : [{}];
          return { entities: await this.entityModel.find({ $or: dataEntities }) };
        } */

  }

  return BaseMongodbServiceHost;
}
