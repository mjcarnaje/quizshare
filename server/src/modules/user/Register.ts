import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import * as bcrypt from 'bcryptjs';
import { MyContext } from '../../types/MyContext';

@Resolver(User)
export class RegisterResovler {
	@Query(() => [User])
	async getUsers(): Promise<User[]> {
		const users = await User.find({ relations: ['profile'] });
		return users;
	}

	@Mutation(() => User)
	async register(
		@Arg('data')
		{
			username,
			email,
			password,
			first_name,
			last_name,
			gender,
			year,
			month,
			day,
		}: RegisterInput,
		@Ctx() ctx: MyContext
	): Promise<User> {
		const hashedPassword = await bcrypt.hash(password, 12);

		const birthday = new Date(`${year}-${month}-${day}`).toLocaleDateString();
		console.log(`${year}-${month}-${day}`, birthday);

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
			profile: {
				first_name,
				last_name,
				birthday,
				gender,
			},
		}).save();

		ctx.req.session!.user_id = user.id;

		return user;
	}
}
