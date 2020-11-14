import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';

import * as helmet from 'helmet';
import * as csurf from 'csurf';

import { AppModule } from '@api-gateway-nestjs/app.module';
import { GraphQLExceptionsFilter } from '@gmahechas/common-nestjs';

import config from '@api-gateway-nestjs/utils/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../src/utils/ssl/key.pem'),
    cert: fs.readFileSync(__dirname + '/../src/utils/ssl/cert.pem'),
    passphrase: 'Analu'
  }
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { httpsOptions, cors: true });
  app.set('trust proxy', 1);
  //app.use(helmet());
  //app.use(csurf());
  app.useGlobalFilters(new GraphQLExceptionsFilter());
  await app.listen(config.port, () => console.log(`ApiGateway is listening on port ${config.port}`));
}
bootstrap();
