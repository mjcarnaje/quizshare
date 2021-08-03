import { Comment } from "../../entity";
import { Field, ObjectType } from "type-graphql";
import { PageInfo } from "../../types";

@ObjectType()
export class PaginatedComment {
  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
