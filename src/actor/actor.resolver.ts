/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Actor } from 'src/models/actor.model';
import { ActorService } from './actor.service';
import { Query } from '@nestjs/graphql';
import { ActorInput } from './dto/actor.input';
import { DeleteResponse } from './dto/response.output';

@Resolver((of) => Actor)
export class ActorResolver {
  constructor(private readonly actorService: ActorService) {}

  @Query((returns) => [Actor])
  getAllActors(): Promise<Actor[]> {
    return this.actorService.getAll();
  }

  @Query((returns) => Actor)
  getOneActor(@Args('id', { type: () => String }) id: string): Promise<Actor> {
    return this.actorService.getOne(id);
  }

  @Mutation((returns) => Actor)
  addActor(@Args('actorInput') actorInput: ActorInput): Promise<Actor> {
    return this.actorService.addActor(actorInput);
  }

  @Mutation((returns) => Actor)
  updateActor(
    @Args('id', { type: () => String }) id: string,
    @Args('actorInput') actorInput: ActorInput,
  ): Promise<Actor> {
    return this.actorService.updateActor(id, actorInput);
  }

  @Mutation((returns) => DeleteResponse)
  deleteActor(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DeleteResponse> {
    return this.actorService.deleteActor(id);
  }
}
