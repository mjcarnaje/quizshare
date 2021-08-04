import { Field, Float, Int, ObjectType } from "type-graphql";
import { Quiz } from "../../entity";
import { PageInfo } from "../../types";

@ObjectType()
export class PaginatedQuizzes {
  @Field(() => [Quiz])
  quizzes: Quiz[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class CheckAnswerResult {
  @Field(() => Int)
  score: number;

  @Field(() => Float)
  percentage: number;
}
