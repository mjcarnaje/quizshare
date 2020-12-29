import { AuthenticationError } from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import { IsNotEmpty } from 'class-validator';
import { Arg, Ctx, Mutation, Resolver, InputType, Field } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@InputType()
export class loginInput {
	@Field()
	@IsNotEmpty({ message: 'Email or username should not be empty' })
	emailOrUsername: string;

	@Field()
	@IsNotEmpty()
	password: string;
}

@Resolver()
export class LoginResolver {
	@Mutation(() => User)
	async login(
		@Arg('data') { emailOrUsername, password }: loginInput,
		@Ctx() ctx: MyContext
	): Promise<User> {
		const user = await User.findOne(
			emailOrUsername.includes('@')
				? { email: emailOrUsername }
				: { username: emailOrUsername },
			{ relations: ['profile'] }
		);

		if (!user) {
			throw new Error('User not found');
		}

		const valid = await bcrypt.compare(password, user.password);

		if (!valid) {
			throw new Error('Wrong Credentials');
		}

		if (!user.confirmed) {
			throw new AuthenticationError('Please confirm you email address');
		}

		ctx.req.session!.user_id = user.id;

		return user;
	}
}
