import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@auth/app.module';
import config from '@auth/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:'.concat(config.port),
      package: ['authentication'],
      protoPath: join(__dirname, '../node_modules/@gmahechas/common-nestjs/src/grpc/protos/auth/auth.proto'),
    },
  });
  await app.listen(() => console.log(`AUTH is listening on port ${config.port}`));
}
bootstrap();
