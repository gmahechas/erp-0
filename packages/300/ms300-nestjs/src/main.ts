import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms300/app.module';
import config from '@ms300/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:'.concat(config.port),
      package: ['type_person', 'type_identification', 'person'],
      protoPath: join(__dirname, '../node_modules/@gmahechas/common-nestjs/protos/ms300/ms300.proto'),
    },
  });
  await app.listen(() => console.log(`MS300 is listening on port ${config.port}`));
}
bootstrap();
