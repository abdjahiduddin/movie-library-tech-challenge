import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorResolver } from './actor.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from 'src/models/actor.model';
import { MovieActor } from 'src/models/movie_actor.model';

@Module({
  imports: [SequelizeModule.forFeature([Actor, MovieActor])],
  providers: [ActorService, ActorResolver],
})
export class ActorModule {}
