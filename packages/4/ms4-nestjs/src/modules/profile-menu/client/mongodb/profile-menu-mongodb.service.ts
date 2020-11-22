import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  IProfileMenu,
  BaseMongodbService,
  ProfileMenuDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMenuMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(ProfileMenuDocument.name)
    private readonly entityModel: Model<ProfileMenuDocument>,
  ) {
    super(entityModel);
  }

  searchMany(
    data: IEntityMany<IProfileMenu>,
  ): Observable<IEntityMany<IProfileMenu>> {
    const searchManyAsync = async (): Promise<IEntityMany<IProfileMenu>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
