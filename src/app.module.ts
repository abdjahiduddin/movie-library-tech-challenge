import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { configValidationSchema } from './config/validation.schema';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${process.env.STAGE}.stage.env`],
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
