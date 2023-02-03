import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Actor } from './actor.model';
import { MovieActor } from './movie_actor.model';
import { Author } from './author.model';

@Table
@ObjectType()
export class Movie extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  @Field()
  mov_id: string;

  @Column({
    allowNull: false,
  })
  @Field()
  mov_title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  @Field()
  mov_description: string;

  @Column({
    allowNull: false,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  mov_realease_year: number;

  @Column({
    allowNull: false,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  mov_length: number;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  @Field()
  mov_aut_id: string;

  @BelongsToMany(() => Actor, () => MovieActor)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [Actor])
  actors: Actor[];

  @BelongsTo(() => Author)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Author)
  author: Author;
}
