import { User } from '../../entity/User';
import { Resolver, Mutation, Ctx } from 'type-graphql';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class DeleteUserResolver {
	@Mutation(() => String)
	async deleteUser(@Ctx() { req }: MyContext): Promise<string> {
		const user = await User.findOneOrFail({ id: req.session.user_id });

		await user.remove();

		return 'DELETED USER';
	}
}
