import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';
import { Movie } from './movie.model';

@Table
export class Author extends Model<Author> {
  @Column({
    primaryKey: true,
    type: DataType.STRING(21),
    validate: {
      is: /^[a-zA-Z0-9_-]{21}$/g,
    },
  })
  aut_id: string;

  @Column({
    type: DataType.STRING(45),
    allowNull: false,
  })
  aut_name: string;

  @HasMany(() => Movie)
  movies: Movie[];
}
