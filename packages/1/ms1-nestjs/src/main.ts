import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { GrpcExceptionFilter } from '@gmahechas/common-nestjs';

import { AppModule } from '@ms1/app.module';
import config from '@ms1/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['country', 'estate', 'city', 'address'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-nestjs/src/grpc/protos/1/1.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new GrpcExceptionFilter());
  await app.listen(() =>
    console.log(`MS100 is listening on port ${config.port}`),
  );
}
bootstrap();
