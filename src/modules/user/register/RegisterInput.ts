import { Length, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { isEmailAlreadyExist } from './isEmailAlreadyExist';
import { isPasswordMatched } from './isPasswordMatched';
import { isUsernameAlreadyExist } from './isUsernameAlreadyExist';

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 10)
	@isUsernameAlreadyExist({ message: 'Username is already exist' })
	username: string;

	@Field()
	@Length(1, 72)
	@isEmailAlreadyExist({ message: 'Email is already exist' })
	email: string;

	@Field()
	@MinLength(6)
	password: string;

	@Field()
	@isPasswordMatched('password', { message: 'passwords does not match' })
	confirmPassword: string;
}
