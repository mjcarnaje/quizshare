import { Field, ObjectType } from "type-graphql";
import { User } from "../../entity";
import { PageInfo } from "../../types";

@ObjectType()
export class PaginatedUsers {
  @Field(() => [User])
  users: User[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
