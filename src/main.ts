import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';
// import { AuthFilter } from './filters/auth.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    }),
  );

  // TODO: uncomment if you would like auth redirect on every request
  // app.useGlobalFilters(new AuthFilter());
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(AppConfigService);

  await app.listen(configService.port);
}
bootstrap();
