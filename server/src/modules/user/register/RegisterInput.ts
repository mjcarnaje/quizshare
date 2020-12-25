import {
	IsDate,
	IsEmail,
	IsEnum,
	IsOptional,
	Length,
	MaxDate,
	MinDate,
	MinLength,
} from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Gender } from '../../../types/Gender';
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
	@Length(1, 32)
	firstName: string;

	@Field()
	@Length(1, 23)
	lastName: string;

	@Field(() => Date)
	@IsDate()
	@MinDate(new Date('1940'), {
		message: 'Please be sure to use your real birthday',
	})
	@MaxDate(new Date('2013'), {
		message: 'Please be sure to use your real birthday',
	})
	year: Date;

	@Field() // IsEnum(Month)
	month: string;

	@Field() // IsEnum(Day)
	day: string;

	@Field()
	@IsOptional()
	@IsEnum(Gender)
	gender: Gender;
}
