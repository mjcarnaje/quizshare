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
import { Brackets, getConnection } from "typeorm";
import { Follow, User } from "../../entity";
import { isAuthenticated, isSuperAdmin } from "../../middleware";
import { IContext } from "../../types";
import { ChangeRoleInput, UsersInput } from "./user.inputs";
import { PaginatedUsers } from "./user.types";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => Boolean)
  async isFollowed(@Root() user: User, @Ctx() ctx: IContext) {
    const follow = await ctx.followLoader.load(user.id);
    return (
      user.id === follow?.followedId &&
      ctx.req.session.userId === follow?.followerId
    );
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => PaginatedUsers)
  async users(@Arg("input") input: UsersInput): Promise<PaginatedUsers> {
    const { limit, search, cursor } = input;
    const limitPlusOne = limit + 1;

    let users = await getConnection()
      .getRepository(User)
      .createQueryBuilder("user");

    if (search) {
      users = users.where(
        new Brackets((qb) => {
          qb.where("user.username ilike :search", {
            search: `%${search}%`,
          })
            .orWhere("user.email ilike :search", {
              search: `%${search}%`,
            })
            .orWhere("user.firstName ilike :search", {
              search: `%${search}%`,
            })
            .orWhere("user.lastName ilike :search", {
              search: `%${search}%`,
            });
        })
      );
    }

    if (cursor) {
      users = users.andWhere("user.createdAt < :cursor", {
        cursor: new Date(Number(cursor) - 1),
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
      let user = await User.findOne(userId);

      if (!user) {
        throw new Error("There is an error");
      }

      user.role = newRole;

      user = await User.save(user);

      return user;
    } catch (err) {
      throw new Error("Sever Error");
    }
  }

  @UseMiddleware(isAuthenticated)
  @Mutation(() => User)
  async toggleFollow(
    @Arg("userId") userId: string,
    @Ctx() ctx: IContext
  ): Promise<User> {
    const meUserId = ctx.req.session.userId;

    let user = await User.findOneOrFail(meUserId);
    let toFollow = await User.findOneOrFail(userId);

    const followed = await Follow.findOne({
      followerId: meUserId,
      followedId: userId,
    });

    if (followed) {
      user.followedCount--;
      toFollow.followerCount--;
      await Follow.delete({
        followerId: meUserId,
        followedId: userId,
      });
    } else {
      user.followedCount++;
      toFollow.followerCount++;
      await Follow.create({
        followerId: meUserId,
        followedId: userId,
      }).save();
    }

    await User.save(user);
    toFollow = await User.save(toFollow);

    return toFollow;
  }
}
