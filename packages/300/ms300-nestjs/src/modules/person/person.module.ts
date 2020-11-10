import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { PersonDocument, PersonSchema } from '@ms300/modules/person/client/mongodb/person.schema';

import { PersonGrpcController } from '@ms300/modules/person/server/grpc/person-grpc.controller';
import { PersonMongodbService } from '@ms300/modules/person/client/mongodb/person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'person',
        name: PersonDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = PersonSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [PersonGrpcController],
  providers: [PersonMongodbService]
})
export class PersonModule {}
