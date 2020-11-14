import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, ITypeIdentification , BaseMongodbService, TypeIdentificationDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class TypeIdentificationMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(TypeIdentificationDocument.name) private readonly entityModel: Model<TypeIdentificationDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ITypeIdentification>): Observable<IEntityMany<ITypeIdentification>> {
    const searchManyAsync = async(): Promise<IEntityMany<ITypeIdentification>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }

}
