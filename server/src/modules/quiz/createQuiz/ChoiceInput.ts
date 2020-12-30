import { IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ChoiceInput {
	@Field()
	choice_id: number;

	@Field()
	text: string;

	@Field({ nullable: true })
	@IsString()
	// @IsBase64({ message: 'Enter valid image file (base64)' })
	choicePhoto?: string;
}
