import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserDocument, userSchema } from '@gmahechas/common-nestjs';

import { UserGrpcController } from '@auth/modules/user/server/grpc/user-grpc.controller';
import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'user',
        name: UserDocument.name,
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UserGrpcController],
  providers: [UserMongodbService],
})
export class UserModule {}
