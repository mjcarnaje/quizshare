import { IsString, IsUUID, MinLength } from 'class-validator';
import { Field, ID, InputType } from 'type-graphql';
import { ChoiceInput } from './ChoiceInput';

@InputType()
export class QuestionInput {
	@Field(() => ID)
	@IsUUID()
	question_id: number;

	@Field()
	@MinLength(6)
	question: string;

	@Field()
	quiz_id: number;

	@Field({ nullable: true })
	// @IsBase64({ message: 'Enter valid image file (base64)' })
	@IsString()
	question_photo?: string;

	@Field(() => [ChoiceInput])
	choices: ChoiceInput[];

	@Field(() => ID)
	@IsUUID()
	answer: number;

	@Field({ nullable: true })
	explanation: string;

	@Field({ defaultValue: false })
	with_explanation: boolean;

	@Field({ nullable: true })
	hint: string;

	@Field({ defaultValue: false })
	with_hint: boolean;
}
