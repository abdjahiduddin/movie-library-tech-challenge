import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput {
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
}
