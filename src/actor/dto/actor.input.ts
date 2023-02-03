import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ActorInput {
  @Field()
  act_name: string;
}
