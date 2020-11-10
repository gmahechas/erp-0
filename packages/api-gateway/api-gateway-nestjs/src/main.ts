import { NestFactory } from '@nestjs/core';

import { AppModule } from '@api-gateway-nestjs/app.module';
import { GraphQLExceptionsFilter } from '@gmahechas/common-nestjs';

import config from '@api-gateway-nestjs/utils/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GraphQLExceptionsFilter());
  await app.listen(config.port, () => console.log(`ApiGateway is listening on port ${config.port}`));
}
bootstrap();
