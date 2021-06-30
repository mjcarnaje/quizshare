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
  minimumPassingPercentage: number;
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
export class QuizIdInput {
  @Field({ nullable: true })
  quizId?: string;
}

@InputType()
export class SaveAsDraftInput {
  @Field(() => [QuestionInput])
  questions: QuestionInput[];

  @Field(() => [ResultInput])
  results: ResultInput[];
}

@InputType()
export class QuizzesInput {
  @Field(() => String, { nullable: true })
  query?: string;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;

  @Field(() => Boolean, { nullable: true })
  isPublished?: boolean;
}

@ObjectType()
export class PaginatedQuizzes {
  @Field(() => [Quiz])
  quizzes: Quiz[];

  @Field(() => Boolean)
  hasMore: boolean;
}
