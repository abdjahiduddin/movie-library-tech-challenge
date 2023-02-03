import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from 'src/models/author.model';
import { AuthorInput } from './dto/author.input';
import { nanoid } from 'nanoid';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author)
    private readonly authorModel: typeof Author,
  ) {}

  async getAll(): Promise<Author[]> {
    return this.authorModel.findAll();
  }

  async getOne(id: string): Promise<Author> {
    return this.authorModel.findOne({
      where: {
        id,
      },
    });
  }

  async addActor(authorInput: AuthorInput): Promise<Author> {
    const { aut_name } = authorInput;
    const aut_id = nanoid();
    return this.authorModel.create({ aut_id, aut_name });
  }

  async updateActor(id: string, authorInput: AuthorInput): Promise<Author> {
    const { aut_name } = authorInput;
    const author = await this.getOne(id);

    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }

    author.aut_name = aut_name;

    await author.save();
    return author;
  }

  async deleteActor(id: string): Promise<{ id: string; message: string }> {
    const result = await this.authorModel.destroy({ where: { aut_id: id } });
    if (result === 0) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return {
      id,
      message: 'Successfully deleted author',
    };
  }
}
