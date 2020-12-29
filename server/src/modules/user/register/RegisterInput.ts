import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	Length,
	MaxLength,
	MinLength,
} from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Gender } from '../../../types/Type';
import { isEmailAlreadyExist } from './isEmailAlreadyExist';
import { isPasswordMatched } from './isPasswordMatched';
import { isUsernameAlreadyExist } from './isUsernameAlreadyExist';

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 72)
	@isUsernameAlreadyExist({ message: 'Username is already exist' })
	username: string;

	@Field()
	@Length(1, 72)
	@IsEmail()
	@isEmailAlreadyExist({ message: 'Email is already exist' })
	email: string;

	@Field()
	@MinLength(6)
	password: string;

	@Field()
	@isPasswordMatched('password', { message: 'Passwords does not match' })
	confirm_password: string;

	@Field()
	@MinLength(3)
	@MaxLength(36)
	first_name: string;

	@Field()
	@MinLength(3)
	@MaxLength(36)
	last_name: string;

	@Field()
	@IsNotEmpty({ message: 'Year is required' })
	year: string;

	@Field()
	@IsNotEmpty({ message: 'Month is required' })
	month: string;

	@Field()
	@IsNotEmpty({ message: 'Day is required' })
	day: string;

	@Field()
	@IsOptional()
	@IsEnum(Gender, { message: 'Gender is required' })
	gender: Gender;
}
