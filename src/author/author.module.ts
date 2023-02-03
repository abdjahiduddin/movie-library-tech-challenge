import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/models/author.model';

@Module({
  imports: [SequelizeModule.forFeature([Author])],
  providers: [AuthorService, AuthorResolver],
})
export class AuthorModule {}
