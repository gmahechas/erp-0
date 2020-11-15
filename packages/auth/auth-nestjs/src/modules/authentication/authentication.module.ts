import { Module } from '@nestjs/common';

import { AuthenticationGrpcController } from '@auth/modules/authentication/server/grpc/authentication-grpc.controller';
import { AuthenticationRedisService } from '@auth/modules/authentication/client/redis/authentication-redis.service';

@Module({
  controllers: [AuthenticationGrpcController],
  providers: [AuthenticationRedisService]
})
export class AuthenticationModule { }
