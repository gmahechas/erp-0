import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  IMenu,
  BaseMongodbService,
  MenuDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class MenuMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(MenuDocument.name)
    private readonly entityModel: Model<MenuDocument>,
  ) {
    super(entityModel);
  }

  searchMany(data: IEntityMany<IMenu>): Observable<IEntityMany<IMenu>> {
    const searchManyAsync = async (): Promise<IEntityMany<IMenu>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
