import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  IUserProfile,
  BaseMongodbService,
  UserProfileDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class UserProfileMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(UserProfileDocument.name)
    private readonly entityModel: Model<UserProfileDocument>,
  ) {
    super(entityModel);
  }

  searchMany(
    data: IEntityMany<IUserProfile>,
  ): Observable<IEntityMany<IUserProfile>> {
    const searchManyAsync = async (): Promise<IEntityMany<IUserProfile>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
