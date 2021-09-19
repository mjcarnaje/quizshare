import { GraphQLJSONObject } from "graphql-type-json";
import { Field, InputType, Int } from "type-graphql";

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

@InputType()
export class GetTakersInput {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor?: string;
}

@InputType()
export class SubmitAnswersInput {
  @Field(() => String)
  quizId: string;

  @Field(() => GraphQLJSONObject)
  answers: Record<string, string>;
}
