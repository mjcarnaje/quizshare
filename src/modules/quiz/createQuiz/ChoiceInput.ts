import { IsBase64 } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ChoiceInput {
	@Field()
	choiceId: number;

	@Field()
	text: string;

	@Field({ nullable: true })
	@IsBase64({ message: 'Enter valid image file (base64)' })
	choicePhoto?: string;
}
