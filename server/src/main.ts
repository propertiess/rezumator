import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  app.use(json({ limit: '50mb' }));

  app.use(urlencoded({ extended: true }));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false
    })
  );
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
