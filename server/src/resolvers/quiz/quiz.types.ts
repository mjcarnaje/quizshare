import { Field, ObjectType } from "type-graphql";
import { Quiz, Score } from "../../entity";
import { PageInfo } from "../../types";

@ObjectType()
export class PaginatedQuizzes {
  @Field(() => [Quiz])
  quizzes: Quiz[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
@ObjectType()
export class PaginatedTakers {
  @Field(() => [Score])
  takers: Score[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
