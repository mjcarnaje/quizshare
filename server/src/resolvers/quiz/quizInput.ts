import { Field, InputType, Int, ObjectType } from "type-graphql";
import { Quiz } from "../../entity/Quiz";

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
export class CreateQuizInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  quizPhoto?: string;

  @Field(() => [QuestionInput])
  questions: QuestionInput[];
}

@InputType()
export class QueryQuizzesInput {
  @Field(() => String, { nullable: true })
  query?: string;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}

@ObjectType()
export class PaginatedQuizzes {
  @Field(() => [Quiz])
  quizzes: Quiz[];

  @Field(() => Boolean)
  hasMore: boolean;
}
