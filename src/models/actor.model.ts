import {
  Column,
  Model,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { MovieActor } from './movie_actor.model';
import { Movie } from './movie.model';
import { Field, ObjectType } from '@nestjs/graphql';

@Table
@ObjectType()
export class Actor extends Model<Actor> {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  @Field()
  act_id: string;

  @Column({
    type: DataType.STRING(45),
    allowNull: false,
    unique: true,
  })
  @Field()
  act_name: string;

  @BelongsToMany(() => Movie, () => MovieActor)
  movies: Movie[];
}
