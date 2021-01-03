import { Ctx, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class MeResolver {
	@Query(() => User, { nullable: true })
	async me(@Ctx() ctx: MyContext): Promise<User | undefined | null> {
		console.log(ctx.req.session.user_id);
		if (!ctx.req.session!.user_id) {
			return null;
		}
		const user = await User.findOne(ctx.req.session!.user_id, {
			relations: ['profile'],
		});

		return user;
	}
}
