import DataLoader from "dataloader";
import { getConnection } from "typeorm";
import { Follow } from "../entity";

export const createFollowLoader = () =>
  new DataLoader(async (authorIds) => {
    const follows = await getConnection()
      .getRepository(Follow)
      .createQueryBuilder("subscription")
      .where("subscription.followedId IN (:...ids)", { ids: authorIds })
      .getMany();

    const followsMap: Record<string, Follow> = {};

    follows.forEach((follow) => {
      followsMap[follow.followedId] = follow;
    });

    return authorIds.map(
      (userId) => followsMap[userId as keyof typeof followsMap]
    );
  });
