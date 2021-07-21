import {
  Mutation,
  Resolver,
  Arg,
  Ctx,
  UseMiddleware,
  FieldResolver,
  Root,
} from "type-graphql";
import { User, Subscription } from "../../entity";
import { isAuthenticated } from "../../middleware/isAuthenticated";
import { MyContext } from "../../types/types";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => Boolean)
  async isFollowed(@Root() user: User, @Ctx() ctx: MyContext) {
    const status = await ctx.subscriptionLoader.load(user.id);
    return user.id === status?.followedId;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => User)
  async toggleSubscription(
    @Arg("userId") userId: string,
    @Ctx() ctx: MyContext
  ): Promise<User> {
    const meUserId = ctx.req.session.userId;

    let user = await User.findOneOrFail(meUserId);

    const followed = await Subscription.findOne({
      followerId: meUserId,
      followedId: userId,
    });

    if (followed) {
      user.followedCount--;
      await Subscription.delete({
        followerId: meUserId,
        followedId: userId,
      });
    } else {
      user.followedCount++;
      await Subscription.create({
        followerId: meUserId,
        followedId: userId,
      }).save();
    }

    user = await User.save(user);

    return user;
  }
}
