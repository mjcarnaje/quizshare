import { IsString, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { QuestionInput } from './QuestionInput';

@InputType()
export class ResultInput {
	@Field()
	result_id: string;
	@Field()
	title: string;
	@Field({ nullable: true })
	result_photo?: string;
	@Field()
	minimum_percentage: number;
	@Field()
	description: string;
}
@InputType()
export class TagInput {
	@Field()
	name: string;
}

@InputType()
export class QuizInput {
	@Field()
	@MinLength(6)
	title: string;

	@Field()
	@MinLength(80)
	description: string;

	@Field({ nullable: true })
	@IsString()
	quiz_photo?: string;

	@Field(() => [QuestionInput])
	questions: QuestionInput[];

	@Field(() => [ResultInput], { nullable: true })
	results?: ResultInput[];

	@Field(() => [TagInput], { nullable: true })
	tags?: [TagInput];
}
