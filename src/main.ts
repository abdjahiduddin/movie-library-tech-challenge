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
  const port = configService.get('PORT');
  const hostname = process.env.NODE_ENV === 'dev' ? 'localhost' : '0.0.0.0';
  const env = process.env.NODE_ENV.toUpperCase();

  await app.listen(port, hostname);
  logger.log(`[${env}] Application listening on port ${hostname}:${port}`);
}
bootstrap();
