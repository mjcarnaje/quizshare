import { IsString, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { QuestionInput } from './QuestionInput';

@InputType()
export class QuizInput {
	@Field()
	@MinLength(6)
	title: string;

	@Field()
	@MinLength(6)
	description: string;

	@Field({ nullable: true })
	@IsString()
	quiz_photo?: string;

	@Field(() => [QuestionInput])
	questions: QuestionInput[];
}
