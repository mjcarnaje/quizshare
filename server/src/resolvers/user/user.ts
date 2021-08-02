import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Subscription, User } from "../../entity";
import { isAuthenticated, isSuperAdmin } from "../../middleware";
import { IContext } from "../../types";
import { ChangeRoleInput, UsersInput, PaginatedUsers } from "./userInputs";

@Resolver(User)
export class UserResolver {
  @UseMiddleware(isAuthenticated)
  @Query(() => PaginatedUsers)
  async users(
    @Arg("usersInput") usersInput: UsersInput
  ): Promise<PaginatedUsers> {
    const { limit, search, cursor } = usersInput;
    const limitPlusOne = limit + 1;

    let users = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user");

    if (cursor) {
      users = users.andWhere("user.createdAt < :cursor", {
        cursor: new Date(Number(cursor) - 1),
      });
    }

    if (search) {
      users = users.andWhere("user.title ilike :title", {
        title: `%${search}%`,
      });
    }

    const results = await users
      .orderBy("user.createdAt", "DESC")
      .take(limitPlusOne)
      .getMany();

    const usersRes = results.slice(0, limit);

    return {
      users: usersRes,
      pageInfo: {
        endCursor: usersRes[usersRes.length - 1].createdAt,
        hasNextPage: results.length === limitPlusOne,
      },
    };
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: IContext): Promise<User | null> {
    const user = await User.findOne(ctx.req.session.userId);

    if (!user) {
      return null;
    }

    return user;
  }

  @UseMiddleware(isAuthenticated)
  @UseMiddleware(isSuperAdmin)
  @Mutation(() => User)
  async changeRole(
    @Arg("changeRoleInput") changeRoleInput: ChangeRoleInput
  ): Promise<User> {
    const { userId, newRole } = changeRoleInput;

    try {
      let user = await User.findOneOrFail(userId);

      user.role = newRole;

      user = await User.save(user);

      return user;
    } catch (err) {
      throw new Error("Sever Error");
    }
  }

  @FieldResolver(() => Boolean)
  async isFollowed(@Root() user: User, @Ctx() ctx: IContext) {
    const status = await ctx.subscriptionLoader.load(user.id);
    return user.id === status.followedId;
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => User)
  async toggleSubscription(
    @Arg("userId") userId: string,
    @Ctx() ctx: IContext
  ): Promise<User> {
    const meUserId = ctx.req.session.userId;

    let user = await User.findOneOrFail(meUserId);
    let toFollow = await User.findOneOrFail(userId);

    const followed = await Subscription.findOne({
      followerId: meUserId,
      followedId: userId,
    });

    if (followed) {
      user.followedCount--;
      toFollow.followerCount--;
      await Subscription.delete({
        followerId: meUserId,
        followedId: userId,
      });
    } else {
      user.followedCount++;
      toFollow.followerCount++;
      await Subscription.create({
        followerId: meUserId,
        followedId: userId,
      }).save();
    }

    await User.save(user);
    toFollow = await User.save(toFollow);

    return toFollow;
  }
}
