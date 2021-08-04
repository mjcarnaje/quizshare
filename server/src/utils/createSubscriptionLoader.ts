import DataLoader from "dataloader";
import { getConnection } from "typeorm";
import { Subscription } from "../entity";

export const createSubscriptionLoader = () =>
  new DataLoader(async (authorIds) => {
    const subscriptions = await getConnection()
      .getRepository(Subscription)
      .createQueryBuilder("subscription")
      .where("subscription.followedId IN (:...ids)", { ids: authorIds })
      .getMany();

    const subscriptionMap: Record<string, Subscription> = {};

    subscriptions.forEach((subscription) => {
      subscriptionMap[subscription.followedId] = subscription;
    });

    return authorIds.map(
      (userId) => subscriptionMap[userId as keyof typeof subscriptionMap]
    );
  });
