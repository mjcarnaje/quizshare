import { Like } from "../entity";
import DataLoader from "dataloader";
import { getConnection } from "typeorm";

export const createLikeLoader = () =>
  new DataLoader(async (quizIds) => {
    const likes = await getConnection()
      .getRepository(Like)
      .createQueryBuilder("likes")
      .where("likes.quizId IN (:...ids)", { ids: quizIds })
      .getMany();

    const likeMap: Record<string, Like> = {};

    likes.forEach((like) => {
      likeMap[like.quizId] = like;
    });

    return quizIds.map((userId) => likeMap[userId as keyof typeof likeMap]);
  });
