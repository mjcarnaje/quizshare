import { IsNotEmpty, Length } from 'class-validator';
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Mutation,
	Resolver,
	UseMiddleware,
} from 'type-graphql';
import { User } from '../../entity/User';
import { MyContext } from '../../types/MyContext';
import { isAuthenticated } from '../middleware/isAuthenticated';

@InputType()
export class SocialInput {
	@Field()
	facebook?: string;
	@Field()
	twitter?: string;
	@Field()
	instagram?: string;
	@Field()
	youtube?: string;
}

@InputType()
export class UpdateProfileInput {
	@Field()
	@Length(1, 72)
	first_name: string;

	@Field()
	@Length(1, 72)
	last_name: string;

	@Field({ nullable: true })
	@Length(1, 254)
	bio?: string;

	@Field()
	@IsNotEmpty({ message: 'Year is required' })
	year: string;

	@Field()
	@IsNotEmpty({ message: 'Month is required' })
	month: string;

	@Field()
	@IsNotEmpty({ message: 'Day is required' })
	day: string;

	@Field({ nullable: true })
	country?: string;

	@Field(() => SocialInput, { nullable: true })
	social?: SocialInput;
}

@Resolver()
export class UpdateProfileResolver {
	@UseMiddleware(isAuthenticated)
	@Mutation(() => User, { nullable: true })
	async updateProfile(
		@Arg('data')
		{
			first_name,
			last_name,
			bio,
			year,
			month,
			day,
			country,
			social,
		}: UpdateProfileInput,
		@Ctx() { req }: MyContext
	): Promise<User | null> {
		const birthday = new Date(`${year}-${month}-${day}`).toLocaleDateString();

		const user = await User.findOneOrFail({
			where: { id: req.session.user_id },
		});

		if (!user) {
			return null;
		}
		user.profile.first_name = first_name ?? user.profile.first_name;
		user.profile.last_name = last_name ?? user.profile.last_name;
		user.profile.bio = bio ?? user.profile.bio;
		user.profile.birthday = birthday ?? user.profile.birthday;
		user.profile.country = country ?? user.profile.country;
		user.profile.social = social ?? user.profile.social;

		await user.save();

		return user;
	}
}
