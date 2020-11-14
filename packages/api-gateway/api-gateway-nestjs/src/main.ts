import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { AppModule } from '@api-gateway-nestjs/app.module';
import { GraphQLExceptionsFilter } from '@gmahechas/common-nestjs';

import config from '@api-gateway-nestjs/utils/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.set('trust proxy', 1);
  //app.use(helmet());
  //app.use(csurf());
  app.useGlobalFilters(new GraphQLExceptionsFilter());
  await app.listen(config.port, () => console.log(`ApiGateway is listening on port ${config.port}`));
}
bootstrap();
