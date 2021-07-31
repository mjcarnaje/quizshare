import { GraphQLJSONObject } from "graphql-type-json";
import { Field, Float, InputType, Int, ObjectType } from "type-graphql";
import { Comment, Quiz } from "../../entity";

@InputType()
export class ChoiceInput {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  choicePhoto?: string;
}

@InputType()
export class QuestionInput {
  @Field()
  id: string;

  @Field()
  question: string;

  @Field({ nullable: true })
  questionPhoto?: string;

  @Field(() => [ChoiceInput])
  choices: ChoiceInput[];

  @Field()
  answer: string;

  @Field({ nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  hint?: string;
}

@InputType()
export class ResultInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  resultPhoto?: string;

  @Field(() => Int)
  minimumPercent: number;
}

@InputType()
export class TagInput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class QuizInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  quizPhoto?: string;

  @Field(() => [QuestionInput])
  questions: QuestionInput[];

  @Field(() => [ResultInput])
  results: ResultInput[];

  @Field(() => [TagInput])
  tags: TagInput[];
}

@InputType()
export class QuizzesInput {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}

@ObjectType()
export class PageInfo {
  @Field(() => String)
  endCursor: Date;

  @Field(() => Boolean)
  hasNextPage: boolean;
}

@ObjectType()
export class PaginatedComment {
  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@ObjectType()
export class PaginatedQuizzes {
  @Field(() => [Quiz])
  quizzes: Quiz[];

  @Field(() => PageInfo)
  pageInfo: PageInfo;
}

@InputType()
export class CheckAnswerInput {
  @Field(() => String)
  quizId: string;

  @Field(() => GraphQLJSONObject)
  answers: Record<string, string>;
}

@ObjectType()
export class CheckAnswerResult {
  @Field(() => Int)
  score: number;

  @Field(() => Float)
  percentage: number;
}
