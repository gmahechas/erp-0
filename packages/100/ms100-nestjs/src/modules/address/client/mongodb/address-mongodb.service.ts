import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IAddress , BaseMongodbService, AddressDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class AddressMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(AddressDocument.name) private readonly entityModel: Model<AddressDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IAddress>): Observable<IEntityMany<IAddress>> {
    const searchManyAsync = async(): Promise<IEntityMany<IAddress>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }

}
