import DataLoader from "dataloader";
import { Request as Req, Response as Res } from "express";
import { Session, SessionData } from "express-session";
import { Bookmark, Like, Subscription, User } from "../entity";

export type Response = Res;
export type Request = Req & {
  session: Session & Partial<SessionData> & { userId: string };
};

export type IContext = {
  likeLoader: DataLoader<unknown, Like, unknown>;
  bookmarkLoader: DataLoader<unknown, Bookmark, unknown>;
  authorLoader: DataLoader<unknown, User, unknown>;
  subscriptionLoader: DataLoader<unknown, Subscription, unknown>;
  req: Request;
  res: Response;
};
