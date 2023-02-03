import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Movie } from './movie.model';
import { Actor } from './actor.model';

@Table
export class MovieActor extends Model<MovieActor> {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  mvact_id: string;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  mvact_mov_id: string;

  @ForeignKey(() => Actor)
  @Column({
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  mvact_act_id: string;
}
