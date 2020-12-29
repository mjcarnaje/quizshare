import { AuthenticationError } from 'apollo-server-express';
import * as bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class LoginResolver {
	@Mutation(() => User)
	async login(
		@Arg('emailOrUsername') emailOrUsername: string,
		@Arg('password') password: string,
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
