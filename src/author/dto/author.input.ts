import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthorInput {
  @Field()
  aut_name: string;
}
