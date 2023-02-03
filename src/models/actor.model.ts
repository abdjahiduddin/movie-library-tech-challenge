import {
  Column,
  Model,
  DataType,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { MovieActor } from './movie_actor.model';
import { Movie } from './movie.model';

@Table
export class Actor extends Model<Actor> {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  act_id: string;

  @Column({
    type: DataType.STRING(45),
    allowNull: false,
    unique: true,
  })
  act_name: string;

  @BelongsToMany(() => Movie, () => MovieActor)
  movies: Movie[];
}
