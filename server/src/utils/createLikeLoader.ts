import DataLoader from "dataloader";
import { getConnection } from "typeorm";
import { Like } from "../entity";

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

    return quizIds.map((quizId) => likeMap[quizId as keyof typeof likeMap]);
  });
