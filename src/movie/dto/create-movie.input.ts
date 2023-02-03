import { Field, InputType } from '@nestjs/graphql';

@InputType()
class Actor {
  @Field()
  act_id: string;

  @Field()
  act_name: string;
}

@InputType()
export class CreateMovieInput {
  @Field()
  mov_id: string;

  @Field()
  mov_title: string;

  @Field()
  mov_description: string;

  @Field()
  mov_realease_year: number;

  @Field()
  mov_length: number;

  @Field()
  mov_aut_id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [Actor])
  actors: [Actor];
}
