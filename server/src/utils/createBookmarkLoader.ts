import { Bookmark } from "../entity";
import DataLoader from "dataloader";
import { getConnection } from "typeorm";

export const createBookmarkLoader = () =>
  new DataLoader(async (quizIds) => {
    const bookmarks = await getConnection()
      .getRepository(Bookmark)
      .createQueryBuilder("bookmarks")
      .where("bookmarks.quizId IN (:...ids)", { ids: quizIds })
      .getMany();

    const bookmarkMap: Record<string, Bookmark> = {};

    bookmarks.forEach((bookmark) => {
      bookmarkMap[bookmark.quizId] = bookmark;
    });

    return quizIds.map(
      (userId) => bookmarkMap[userId as keyof typeof bookmarkMap]
    );
  });
