import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms3/app.module';
import config from '@ms3/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:'.concat(config.port),
      package: ['type_person', 'type_identification', 'person'],
      protoPath: join(__dirname, '../node_modules/@gmahechas/common-nestjs/src/grpc/protos/3/3.proto'),
    },
  });
  await app.listen(() => console.log(`MS300 is listening on port ${config.port}`));
}
bootstrap();
