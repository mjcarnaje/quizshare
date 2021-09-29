import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PageInfo {
  @Field(() => String, { nullable: true })
  endCursor: Date | null;

  @Field(() => Boolean)
  hasNextPage: boolean;
}
