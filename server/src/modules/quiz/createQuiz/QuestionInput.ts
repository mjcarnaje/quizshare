import { IsBase64, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { ChoiceInput } from './ChoiceInput';

@InputType()
export class QuestionInput {
	@Field()
	@MinLength(6)
	question: string;

	@Field({ nullable: true })
	id?: number;

	@Field({ nullable: true })
	@IsBase64({ message: 'Enter valid image file (base64)' })
	question_photo?: string;

	@Field(() => [ChoiceInput])
	choices: ChoiceInput[];

	@Field()
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
