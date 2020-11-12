import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PersonDocument, personSchema } from '@gmahechas/common-nestjs';

import { PersonGrpcController } from '@ms300/modules/person/server/grpc/person-grpc.controller';
import { PersonMongodbService } from '@ms300/modules/person/client/mongodb/person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'person',
        name: PersonDocument.name,
        schema: personSchema
      }
    ])
  ],
  controllers: [PersonGrpcController],
  providers: [PersonMongodbService]
})
export class PersonModule { }
