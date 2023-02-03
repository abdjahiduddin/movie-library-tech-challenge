import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from 'src/models/movie.model';
import { MovieActor } from 'src/models/movie_actor.model';

@Module({
  imports: [SequelizeModule.forFeature([Movie, MovieActor])],
  providers: [MovieService, MovieResolver],
})
export class MovieModule {}
