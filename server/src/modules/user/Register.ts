import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import * as bcrypt from 'bcryptjs';
import { sendEmail } from '../utils/sendEmail';
import { confirmationRegistration } from '../utils/confirmation';

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
			firstName,
			lastName,
			gender,
			year,
			month,
			day,
		}: RegisterInput
	): Promise<User> {
		const hashedPassword = await bcrypt.hash(password, 12);

		const birthday = new Date(`${year}-${month}-${day}`).toLocaleDateString();
		console.log(`${year}-${month}-${day}`, birthday);

		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
			profile: {
				firstName,
				lastName,
				birthday,
				gender,
			},
		}).save();

		await sendEmail(
			email,
			firstName,
			await confirmationRegistration(newUser.id)
		);

		return newUser;
	}
}
