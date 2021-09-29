import { Field, Float, Int, ObjectType } from "type-graphql";
import { Quiz, Score } from "../../entity";
import { Maybe, PageInfo } from "../../types";

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

@ObjectType()
export class ScoreResultScore {
  @Field(() => Int)
  score: number;

  @Field(() => Int)
  totalItems: number;

  @Field(() => Float)
  percentage: number;

  @Field(() => String)
  answered: Date;
}

@ObjectType()
export class ScoreResultResult {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  resultPhoto: Maybe<string>;

  @Field(() => Int)
  minimumPercent: number;
}

@ObjectType()
export class ScoreResult {
  @Field()
  id: string;

  @Field(() => ScoreResultScore)
  score: ScoreResultScore;

  @Field(() => ScoreResultResult, { nullable: true })
  result?: ScoreResultResult;
}
