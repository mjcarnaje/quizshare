import * as bcrypt from 'bcryptjs';
import { IsNotEmpty } from 'class-validator';
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
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
	@Mutation(() => User, { nullable: true })
	async login(
		@Arg('data') { emailOrUsername, password }: loginInput,
		@Ctx() ctx: MyContext
	): Promise<User | null> {
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

		ctx.req.session!.user_id = user.id;

		return user;
	}
}
