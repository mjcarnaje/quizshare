import * as bcrypt from 'bcryptjs';
import { IsEmail, Length } from 'class-validator';
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { isEmailAlreadyExist } from './register/isEmailAlreadyExist';
import { isPasswordMatched } from './register/isPasswordMatched';
import { isUsernameAlreadyExist } from './register/isUsernameAlreadyExist';

@InputType()
export class UpdateAccountInput {
	@Field({ nullable: true })
	@Length(1, 72)
	@isUsernameAlreadyExist({ message: 'Username is already exist' })
	username?: string;

	@Field({ nullable: true })
	@Length(1, 72)
	@IsEmail()
	@isEmailAlreadyExist({ message: 'Email is already exist' })
	email?: string;

	@Field({ nullable: true })
	password?: string;

	@Field({ nullable: true })
	@isPasswordMatched('password', { message: 'Passwords does not match' })
	confirm_password?: string;

	@Field({ nullable: true })
	avatar?: string;

	@Field({ nullable: true })
	cover_photo?: string;
}

@Resolver()
export class UpdateAccountResolver {
	@Mutation(() => User)
	async updateAccount(
		@Arg('data')
		{ username, email, password, avatar, cover_photo }: UpdateAccountInput,
		@Ctx() { req }: MyContext
	): Promise<User | null> {
		let hashedPassword;

		if (password) {
			hashedPassword = await bcrypt.hash(password, 12);
		}

		const user = await User.findOneOrFail({
			where: { id: req.session.user_id },
		});

		if (!user) {
			return null;
		}

		user.username = username ?? user.username;
		user.email = email ?? user.email;
		user.password = hashedPassword ?? user.password;
		user.avatar = avatar ?? user.avatar;
		user.cover_photo = cover_photo ?? user.cover_photo;

		await user.save();

		return user;
	}
}
