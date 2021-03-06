import { Field, ObjectType } from "type-graphql";
import { Comment } from "../../entity";
import { PageInfo } from "../../types";

@ObjectType()
export class PaginatedComment {
  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
