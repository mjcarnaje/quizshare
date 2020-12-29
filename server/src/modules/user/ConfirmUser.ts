import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { confirmationPrefix } from '../constant/redisPrefixes';
import { redis } from './../../redis';

@Resolver()
export class ConfirmUserResolver {
	@Mutation(() => Boolean)
	async confirmUser(@Arg('token') token: string): Promise<Boolean> {
		const user_id = await redis.get(confirmationPrefix + token);

		if (!user_id) {
			return false;
		}

		await User.update({ id: parseInt(user_id, 10) }, { confirmed: true });

		await redis.del(token);

		return true;
	}
}
