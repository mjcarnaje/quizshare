import DataLoader from "dataloader";
import { getConnection } from "typeorm";
import { Bookmark } from "../entity";

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
      (quizId) => bookmarkMap[quizId as keyof typeof bookmarkMap]
    );
  });
