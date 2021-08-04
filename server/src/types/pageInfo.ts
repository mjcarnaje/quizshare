import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PageInfo {
  @Field(() => String)
  endCursor: Date;

  @Field(() => Boolean)
  hasNextPage: boolean;
}
