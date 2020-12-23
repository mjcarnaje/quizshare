import {
	IsDate,
	IsEnum,
	IsOptional,
	Length,
	MaxDate,
	MinDate,
	MinLength,
} from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { isEmailAlreadyExist } from './isEmailAlreadyExist';
import { isPasswordMatched } from './isPasswordMatched';
import { Gender } from '../../../types/Gender';
import { isUsernameAlreadyExist } from './isUsernameAlreadyExist';

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 72)
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
	@isPasswordMatched('password', { message: 'Passwords does not match' })
	confirmPassword: string;

	@Field()
	@Length(1, 32)
	firstName: string;

	@Field()
	@Length(1, 23)
	lastName: string;

	@Field()
	@IsDate()
	@MinDate(new Date('1940-01-01'), {
		message: 'Please be sure to use your real birthday',
	})
	@MaxDate(new Date(), { message: 'Please be sure to use your real birthday' })
	birthday: Date;

	@Field()
	@IsOptional()
	@IsEnum(Gender)
	gender: Gender;
}