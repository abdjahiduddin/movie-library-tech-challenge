import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { redirect } from './middleware/redirect.middleware';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(redirect);

  const configService = app.get(ConfigService);
  const port = configService.get('HOST_PORT');
  const env = process.env.STAGE.toUpperCase();

  await app.listen(port);
  logger.log(`[${env}] Application listening on port ${port}`);
}
bootstrap();
