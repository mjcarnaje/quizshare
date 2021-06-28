import { Redis } from "ioredis";
import { Session, SessionData } from "express-session";
import { Request as Req, Response as Res } from "express";

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
  req: Request;
  redis: Redis;
  res: Response;
};

export type IError = { [name: string]: string };
