import { Redis } from "ioredis";
import { Session, SessionData } from "express-session";
import { Request as Req, Response as Res } from "express";
import DataLoader from "dataloader";
import { Like, Bookmark, User, Subscription } from "../entity";

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export type Response = Res;
export type Request = Req & {
  session: Session & Partial<SessionData> & { userId: string };
};

export type MyContext = {
  likeLoader: DataLoader<unknown, Like, unknown>;
  bookmarkLoader: DataLoader<unknown, Bookmark, unknown>;
  authorLoader: DataLoader<unknown, User, unknown>;
  subscriptionLoader: DataLoader<unknown, Subscription, unknown>;
  req: Request;
  redis: Redis;
  res: Response;
};

export type IError = { [name: string]: string };
