import * as bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { forgotPasswordPrefix } from '../constant/redisPrefixes';
import { redis } from './../../redis';
import { ChangePasswordInput } from './changePassword/changePasswordInput';

@Resolver()
export class ChangePasswordResolver {
	@Mutation(() => User, { nullable: true })
	async changePassword(
		@Arg('data') { token, password }: ChangePasswordInput,
		@Ctx() ctx: MyContext
	): Promise<User | null> {
		const userId = await redis.get(forgotPasswordPrefix + token);

		if (!userId) {
			throw new Error('Invalid token');
		}

		const user = await User.findOne(userId);

		if (!user) {
			throw new Error('User not found');
		}

		await redis.del(forgotPasswordPrefix + token);

		user.password = await bcrypt.hash(password, 12);

		await user.save();

		ctx.req.session!.userId = user.id;

		return user;
	}
}
