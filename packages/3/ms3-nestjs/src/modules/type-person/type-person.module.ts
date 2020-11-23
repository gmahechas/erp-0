import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TypePersonDocument, typePersonSchema } from '@gmahechas/common-nestjs';

import { TypePersonGrpcController } from '@ms3/modules/type-person/server/grpc/type-person-grpc.controller';
import { TypePersonMongodbService } from '@ms3/modules/type-person/client/mongodb/type-person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'typePerson',
        name: TypePersonDocument.name,
        schema: typePersonSchema,
      },
    ]),
  ],
  controllers: [TypePersonGrpcController],
  providers: [TypePersonMongodbService],
})
export class TypePersonModule {}
