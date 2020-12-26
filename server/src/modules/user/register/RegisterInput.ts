import {
	IsDate,
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	Length,
	MaxDate,
	MaxLength,
	MinDate,
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
	confirmPassword: string;

	@Field()
	@MinLength(6, { message: 'First name must be atleast 6 characters' })
	@MaxLength(36, { message: 'First name must be excedeed to 36 characters' })
	firstName: string;

	@Field()
	@MinLength(6, { message: 'Last name must be atleast 6 characters' })
	@MaxLength(36, { message: 'Last name must be excedeed to 36 characters' })
	lastName: string;

	@Field(() => Date)
	@IsDate({ message: 'Year is required' })
	@MinDate(new Date('1940'), {
		message: 'Please be sure to use your real birthday',
	})
	@MaxDate(new Date('2013'), {
		message: 'Please be sure to use your real birthday',
	})
	year: Date;

	@Field() // IsEnum(Month)
	@IsNotEmpty({ message: 'Month is required' })
	month: string;

	@Field() // IsEnum(Day)
	@IsNotEmpty({ message: 'Day is required' })
	day: string;

	@Field()
	@IsOptional()
	@IsEnum(Gender, { message: 'Gender is required' })
	gender: Gender;
}
