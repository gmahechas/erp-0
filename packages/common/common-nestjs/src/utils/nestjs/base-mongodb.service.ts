import { Model, Document } from 'mongoose';

import { Observable, from } from 'rxjs';

import { IEntityOne } from '../../grpc/entity-one.interface';

export function BaseMongodbService<A extends Document>(): any {

  abstract class BaseMongodbServiceHost {

    constructor(
      private readonly entityModel: Model<A>
    ) { }

    createOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      const createOneAsync = async (): Promise<IEntityOne<A>> => {
        const { ...dataEntity } = data.entity;
        const model = new this.entityModel(dataEntity);
        return { entity: await model.save() };
      };
      return from(createOneAsync());
    }

    updateOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      const updateOneAsync = async (): Promise<IEntityOne<A>> => {
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
      };
      return from(updateOneAsync());
    }

    deleteOne(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      const deleteOneAsync = async (): Promise<IEntityOne<A>> => {
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
      return from(deleteOneAsync());
    }

    searchById(data: IEntityOne<A>): Observable<IEntityOne<A>> {
      const searchByIdAsync = async (): Promise<IEntityOne<A>> => {
        const { ...dataEntity } = data.entity;
        return { entity: await this.entityModel.findById({ _id: dataEntity.id }) };
      };
      return from(searchByIdAsync());
    }

    /*     searchMany(data: IEntityMany<A>): Observable<IEntityMany<A>> {
          const searchManyAsync = async (): Promise<IEntityOne<A>> => {
            const dataEntities = data.entities ? data.entities : [{}];
            return { entities: await this.entityModel.find({ $or: dataEntities }) };
          };
    
          return from(searchManyAsync());
        } */

  }

  return BaseMongodbServiceHost;
}
