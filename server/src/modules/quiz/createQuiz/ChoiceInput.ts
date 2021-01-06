import { IsString, IsUUID } from 'class-validator';
import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class ChoiceInput {
	@Field(() => ID)
	@IsUUID()
	choice_id: string;

	@Field()
	value: string;

	@Field({ nullable: true })
	@IsString()
	// @IsBase64({ message: 'Enter valid image file (base64)' })
	choicePhoto?: string;
}
