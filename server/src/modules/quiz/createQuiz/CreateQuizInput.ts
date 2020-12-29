import { IsBase64, MinLength } from 'class-validator';
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
	@IsBase64({ message: 'Enter valid image file (base64)' })
	quiz_photo?: string;

	@Field(() => [QuestionInput])
	questions: QuestionInput[];
}
