import { Module } from '@nestjs/common';

import { AuthGrpcController } from '@auth/modules/auth/server/grpc/auth-grpc.controller';
import { UserModule } from '@auth/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthGrpcController],
})
export class AuthModule {}
