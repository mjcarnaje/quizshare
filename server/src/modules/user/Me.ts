import { Ctx, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class MeResolver {
	@Query(() => User, { nullable: true })
	async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
		if (!ctx.req.session!.userId) {
			throw new Error('Authentication Error');
		}
		const user = User.findOne(ctx.req.session!.userId);

		return user;
	}
}
