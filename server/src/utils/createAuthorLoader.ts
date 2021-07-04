import { User } from "../entity";
import DataLoader from "dataloader";
import { getConnection } from "typeorm";

export const createAuthorLoader = () =>
  new DataLoader(async (userIds) => {
    const authors = await getConnection()
      .getRepository(User)
      .createQueryBuilder("author")
      .whereInIds(userIds)
      .getMany();

    const authorMap: Record<string, User> = {};

    authors.forEach((author) => {
      authorMap[author.id] = author;
    });

    return userIds.map((userId) => authorMap[userId as keyof typeof authorMap]);
  });
