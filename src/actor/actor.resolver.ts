import { Resolver } from '@nestjs/graphql';
import { Actor } from 'src/models/actor.model';
import { ActorService } from './actor.service';
import { Query } from '@nestjs/graphql';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Actor)
export class ActorResolver {
  constructor(private readonly actorService: ActorService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((type) => [Actor])
  async getAllActors(): Promise<Actor[]> {
    return this.actorService.getAll();
  }
}
