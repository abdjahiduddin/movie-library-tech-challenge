import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';
import { Actor } from './models/actor.model';
import { Author } from './models/author.model';
import { MovieActor } from './models/movie_actor.model';

@Module({
  imports: [SequelizeModule.forFeature([Movie, Actor, Author, MovieActor])],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
