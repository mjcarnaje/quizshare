import { Ctx, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class MeResolver {
	@Query(() => User, { nullable: true })
	async me(@Ctx() ctx: MyContext): Promise<User | undefined | null> {
		console.log(ctx.req.session.userId);
		if (!ctx.req.session!.userId) {
			return null;
		}
		const user = User.findOne(ctx.req.session!.userId, {
			relations: ['profile'],
		});

		return user;
	}
}
