import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms200/app.module';
import config from '@ms200/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:'.concat(config.port),
      package: ['company', 'office'],
      protoPath: join(__dirname, '../node_modules/@gmahechas/common-nestjs/src/grpc/protos/200/200.proto'),
    },
  });
  await app.listen(() => console.log(`MS200 is listening on port ${config.port}`));
}
bootstrap();
