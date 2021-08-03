import { Field, ObjectType } from "type-graphql";

export type IError = { [name: string]: string };

@ObjectType()
export class PageInfo {
  @Field(() => String)
  endCursor: Date;

  @Field(() => Boolean)
  hasNextPage: boolean;
}
