import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Actor } from './actor.model';
import { MovieActor } from './movie_actor.model';
import { Author } from './author.model';

@Table
export class Movie extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  mov_id: string;

  @Column({
    allowNull: false,
  })
  mov_title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  mov_description: string;

  @Column({
    allowNull: false,
  })
  mov_realease_year: number;

  @Column({
    allowNull: false,
  })
  mov_length: number;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  mov_aut_id: string;

  @BelongsToMany(() => Actor, () => MovieActor)
  actors: Actor[];

  @BelongsTo(() => Author)
  author: Author;
}
