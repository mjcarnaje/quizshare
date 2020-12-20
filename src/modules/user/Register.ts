import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import * as bcrypt from 'bcryptjs';
import { sendEmail } from '../utils/sendEmail';
import { confirmationRegistration } from '../utils/confirmation';
import { Profile } from '../../entity/Profile';

@Resolver(User)
export class RegisterResovler {
	@Mutation(() => User)
	async register(
		@Arg('data')
		{
			username,
			email,
			password,
			birthday,
			gender,
			firstName,
			lastName,
		}: RegisterInput
	): Promise<User> {
		const hashedPassword = await bcrypt.hash(password, 12);

		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		}).save();

		await Profile.create({
			firstName,
			lastName,
			birthday,
			gender,
		}).save();

		await sendEmail(
			email,
			firstName,
			await confirmationRegistration(newUser.id)
		);

		return newUser;
	}
}
