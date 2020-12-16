import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { sendEmail } from '../utils/sendEmail';
import { confirmationForgotPassword } from '../utils/confirmation';

@Resolver()
export class ForgotPasswordResolver {
	@Mutation(() => Boolean)
	async forgotPassword(@Arg('email') email: string): Promise<Boolean> {
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error('User not found');
		}

		await sendEmail(
			email,
			user.firstName,
			await confirmationForgotPassword(user.id)
		);

		return true;
	}
}
