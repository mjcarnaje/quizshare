import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import * as bcrypt from 'bcryptjs';

@Resolver(User)
export class RegisterResovler {
	@Query(() => String)
	async fetchUsers(): Promise<User[]> {
		const users = await User.find();
		return users;
	}

	@Mutation(() => User)
	async register(
		@Arg('data') { username, email, password }: RegisterInput
	): Promise<User> {
		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
		}).save();

		return user;
	}
}
