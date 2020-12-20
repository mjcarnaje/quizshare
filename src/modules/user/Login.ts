import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import * as bcrypt from 'bcryptjs';
import { MyContext } from '../../types/MyContext';
import { AuthenticationError } from 'apollo-server-express';

@Resolver()
export class LoginResolver {
	@Mutation(() => User)
	async login(
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() ctx: MyContext
	): Promise<User> {
		const user = await User.findOne({ email }, { relations: ['profile'] });

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

		ctx.req.session!.userId = user.id;

		return user;
	}
}
