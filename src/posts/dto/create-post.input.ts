import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'post title' })
  title: string;

  @Field(() => String, { description: 'post content' })
  content: string;

  @Field(() => String, { description: 'post thumbnail' })
  thumbnail: string;
}
