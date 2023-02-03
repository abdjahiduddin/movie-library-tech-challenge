import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { configValidationSchema } from './config/validation.schema';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MovieModule } from './movie/movie.module';
import { ActorModule } from './actor/actor.module';
import { AuthorModule } from './author/author.module';

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
    MovieModule,
    ActorModule,
    AuthorModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
