import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from '@ms4/app.module';
import config from '@ms4/utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:'.concat(config.port),
        package: ['menu', 'profile', 'profile_menu', 'user', 'user_profile'],
        protoPath: join(
          __dirname,
          '../node_modules/@gmahechas/common-nestjs/src/grpc/protos/4/4.proto',
        ),
      },
    },
  );
  await app.listen(() =>
    console.log(`MS400 is listening on port ${config.port}`),
  );
}
bootstrap();
